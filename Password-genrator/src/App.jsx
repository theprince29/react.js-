import { useState, useCallback, useEffect,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] =  useState(false)
  const [password,setPassword] = useState("")

const passwordRef = useRef(null)



const passwordGenrator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed){
    str += '0123456789'
  }
  
  if(charAllowed){
    str += '!@#$%^&*()-_+=[]{}|;:,.`/<>?'
  }

  for(let i=1; i<=length;i++)
  {
    let char = Math.floor(Math.random()* str.length+1)

    pass += str.charAt(char)
  }

  setPassword(pass)


},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordtoclipboard =  useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 101);
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{passwordGenrator()},[length,numberAllowed,charAllowed,passwordGenrator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center mb-3'>Password Genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' ref={passwordRef} readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordtoclipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
          <label >Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
        <label >Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
        <label >Character</label>
        </div>
        </div>

      </div>
    </>
  )
}

export default App
