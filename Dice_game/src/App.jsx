import { useState } from 'react';
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';

const App = () => {
  const [isGameStarted,SetisGameStarted]=useState(false)

    const toggleGameplay = ()=>{
        SetisGameStarted((prev)=>!prev)
    }
  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGameplay}/>}
    </>
  )
}

export default App
