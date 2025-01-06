


import { useState } from 'react'
import './App.css'

function App() {
//  let counter = 15
 let [counter, setCounter] = useState(15)
 const addValue = () =>
 {
  if(counter<20)
  setCounter(counter + 1)
else 
setCounter(counter)
 }

 const decValue = () =>
  {
    if (counter>0){
      setCounter(counter - 1)
    }
    else {
      setCounter(0)
    }
   
  }

  return (
 <div>
<h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br></br>
    <button onClick={decValue}>Dec Value</button>
 </div>
  )
}

export default App
