import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from './components/text/text';
import { Navbar } from './components/navbar/Navbar';
import {BodyP1} from './components/Body-part-1/body-P1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <BodyP1/>

      {/* <Text variant= 'h1'>hi there</Text>
      <Text variant= 'h2'>hi there</Text>
      <Text variant= 'P'>hi there</Text>
      <Text variant= 'span'>hi there  </Text> */}
      
      
    </>
  )
}

export default App
 