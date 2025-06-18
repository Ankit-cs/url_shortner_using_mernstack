import React from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useSearch } from '@tanstack/react-router'

const AuthPage = () => {
  const { mode } = useSearch({ from: '/auth' })
  const isLogin = mode === 'login'

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {isLogin ? (
        <LoginForm state={() => {}} />
      ) : (
        <RegisterForm state={() => {}} />
      )}
    </div>
  )
}

export default AuthPage
