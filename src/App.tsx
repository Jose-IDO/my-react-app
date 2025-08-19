import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from './components/text/text';
import { Navbar } from './components/navbar/Navbar';
import { BodyP1 } from './components/Body-part-1/body-P1'
import { BodyP2 } from './components/Body-part-2/BodyP2'
import { BodyP3 } from './components/Body-part-3/Body-p3'
import { BodyP4 } from './components/Body-part-4/BodyP4'
import { BodyP5 } from './components/Body-part-5/BodyP5'

function App() {
  const [count, setCount] = useState(0)

  console.log(reactLogo, viteLogo, Text, count, setCount);

  return (
    <>
      <Navbar />
      <BodyP1 />
      <BodyP2 />
      <BodyP3 />
      <BodyP4 />
      <BodyP5 />
    </>
  )
}

export default App