import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj  = {
    user : "Parikshit",
    age : 21,
   }

  return (
    <>
   <Card> username="Hello someObj={myObj} </Card> 
    
   </> 
  )
}

export default App
