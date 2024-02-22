import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)


// add
const addValue = () => {
  setCounter(counter+1)
}

// remove
const removeValue = () => {
  if(counter==0){
    setCounter(0)
  }
  else(
  setCounter(counter-1)
  )
} 


  return (
    <>
     <h1>Cke With K</h1>
     <h2>Counter : {counter}</h2>
     <button onClick={addValue}>Add</button><button onClick={removeValue}>Remove</button>
   
    </>
  )
}

export default App
