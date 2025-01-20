import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [Password , setPassword] = useState("")
  
  const passwordGenerator = useCallback((  ) => {
     let pass = ""
      let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed) str += "0123456789"
if(charAllowed) str += "!@#$%^&*()"

for(let i=1 ; i<=Array.length; i++){
  let char = Math.floor(Math.random()*str.length + 1);
  let pass = str.charAt(char)
}
setPassword(pass)

  } , [length, numberAllowed,charAllowed,setPassword])
  return (
    <>
     
        {/* <h1 className='text-4xl text-white text-center'>PassWord Generator</h1> */}
        <h1>Passwod Generator </h1>
    </>
  )
}

export default App
