import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import login from './components/login';
import cliente from './components/cliente';
import funcionario from './components/funcionario';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      
      <Route path='/' element={<Navigate to="/login" replace />} />
      <Route path='/login' element={login} />
      <Route path='/cliente' element={cliente} />
      <Route path='/funcionario' element={funcionario} />

     </Routes>
    </>
  )
}

export default App
