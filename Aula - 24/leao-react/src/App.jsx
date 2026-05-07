import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Componente1 from './components/Componente1.jsx'
import Componente2 from './components/Componente2.jsx'
import Componente3 from './components/Componente3.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Componente1 />
      <Componente2 />
      <Componente3 />
    </>
  )
}

export default App
