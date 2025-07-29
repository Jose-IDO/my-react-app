import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from './components/text/text';
import { Navbar } from './components/navbar/Navbar';
import { BodyP1 } from './components/Body-part-1/body-P1'
import { BodyP2 } from './components/Body-part-2/BodyP2'



function App() {
  const [count, setCount] = useState(0)


 console.log(reactLogo, viteLogo, Text, count, setCount);


  return (
    <>
      <Navbar />
      <BodyP1 />
      <BodyP2 />
    </>
  )
}

export default App
