import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Ola from './components/ola'
import Atividade from './pages/atividade'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class="text-center">Olá mundo.</h1>
    {/* <Header />
    <Home />
    <Footer />
    <Ola /> */}
    <Atividade />
    </>
  )
}

export default App
