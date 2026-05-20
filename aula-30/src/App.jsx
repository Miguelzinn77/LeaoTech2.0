import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>
import './App.css'
import '/bootstrap-5.3.8-dist/css/bootstrap.min.css'
import Login from './pages/Login/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-danger'>Aula de Teste</h1>

<Login />

    </>
  )
}

export default App
