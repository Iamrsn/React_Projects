import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, Setscore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, Seterror] = useState("");
  const [showrules,showSetrules]=useState(false)

  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
    //console.log(Math.floor(Math.random() * (max-min) + min));
    //ham random value check karte hai
  };

  const roleDice = () => {
    if (!SelectedNumber) {
      Seterror("You Have Not Selected Any Number");
      return;
    }
    Seterror("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (SelectedNumber === randomNumber) {
      Setscore((prev) => prev + randomNumber);
    } else {
      Setscore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const reset = () => {
    Setscore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          Seterror={Seterror}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={reset}>RESET</OutlineButton>
        <Button onClick={()=>showSetrules((prev)=>!prev)}>{showrules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showrules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
