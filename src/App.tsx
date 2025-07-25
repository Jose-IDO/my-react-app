import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from './components/text/text';
import { Navbar } from './components/navbar/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar name ='Joseph' surname = 'Idowu'/>
      <Text variant= 'h1'>hi there</Text>
      <Text variant= 'h2'>hi there</Text>
      <Text variant= 'P'>hi there</Text>
      <Text variant= 'span'>hi there  </Text>
      
      
    </>
  )
}

export default App
 