import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // const newObj = {
  //   name:"kara",
  //   age:21
  // }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
    <Card username="whysokara" btnName="look Profile"/>
    <Card username="bhagggg"/>

    </>
  )
}

export default App
