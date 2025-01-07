import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAll, setNumAll] = useState(false)
  const [charAll, setCharAll] = useState(false)
  const [pass, setPass] = useState("")
//useRef hook
  const passRef = useRef(null)

  const passGen = useCallback(()=>{
    let passw = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAll) 
      str += "0123456789"
    if(charAll) str += "`!@#$%^&*()"
    for(let i = 0; i <= length; i++){
      let char = Math.floor(Math.random() * str.length +1 )
      passw += str.charAt(char) 
    }
    setPass(passw)
 }
     , [length, numAll, charAll, setPass]) 
    useEffect(() => {
  passGen()
}, [length, charAll, numAll, passGen])

const copyPasstoClip = useCallback(() => {
  passRef.current?.select();
  //for range : passRef.current?.setSelectionRange(0, 9)
  window.navigator.clipboard.writeText(pass)
}, [pass])
  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  my-8 text-orange-500 
    bg-gray-600 '>
    <h1 className='text-white text-center text-lg justify-center my-3'>Password Generator</h1>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    
    <input type='text' value={pass} placeholder='password' 
    className='outline-none w-full py-1 px-3'
    readOnly 
      ref={passRef}
    />

 <button
 onClick={copyPasstoClip}
  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
  Copy
 </button>
</div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type='range'
    min={6} max={100}  value={length}
    className='cursor-pointer'
    onChange={(e) => {setLength(e.target.value)} }
    />
   <label>Length: {length}</label>
    
  </div>
  <div className='flex items-center gap-x-1'>
  <input 
  type='checkbox'
  defaultChecked={numAll}
  id="numberInput"
  onChange={
    () => {
      setNumAll((prev) => !prev );  //This means that the previous state is reversed. If we directly write true then it will always be checked although not visible
    }
  }
  >
    
  </input>
  <label>Numbers</label>

  </div>
  <div className='flex items-center gap-x-1'>
  <input 
  type='checkbox'
  defaultChecked={charAll}
  id="charInput"
  onChange={
    () => {
      setCharAll((prev) => !prev );   //This means that the previous state is reversed. If we directly write true then it will always be checked although not visible
    }
  }
  >
    
  </input>
  <label>Characters</label>

  </div>
  </div>
  
   </div>
   </>
  )
}

export default App
