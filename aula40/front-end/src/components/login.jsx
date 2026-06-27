import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const login = () => {

    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    const Navigate = useNavigate()

  return (
    <>
    <div>
      <h1>login</h1>
    </div>
    </>
  )
}

export default login
