import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/navbar.jsx'
import Dados from './components/Dados/Dados.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>oláaaa</h1>
      <Navbar />
      <Dados />

    </>
  )
}

export default App
