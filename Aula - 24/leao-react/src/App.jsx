import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Componente1 from './components/Componente1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Componente1 />
    </>
  )
}

export default App
