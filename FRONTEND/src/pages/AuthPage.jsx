import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useSearch } from '@tanstack/react-router'

const AuthPage = () => {
  const { mode } = useSearch({ strict: false }) // read ?mode=login or ?mode=register
  const [login, setLogin] = useState(mode !== 'register')

  useEffect(() => {
    if (mode === 'register') setLogin(false)
    else setLogin(true)
  }, [mode])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
    </div>
  )
}

export default AuthPage
