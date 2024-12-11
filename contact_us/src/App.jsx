import Navbar from './components/Navigation/Navbar'
import "./App.css"
import Contact from './components/contact/Contact'
import Form from './components/form/Form'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className='main_container'>
      <Contact/>
      <Form/>
      </main>
    </div>
  )
}

export default App