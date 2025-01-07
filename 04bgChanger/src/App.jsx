import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [color, setColor] = useState("olive")
  

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
   <div className="flex flex-wrap bottom-12 justify-center fixed inset-x-0 px-2">
    <div className="flex flex-wrap justify-center fixed gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
    <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
    style={{backgroundColor: "red"}}
    >Red</button>
    <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "green"}}
    >Green</button>
    <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: "blue"}}
    >Blue</button>
    </div>
   </div>

   </div>
  )
}

export default App
