import React from 'react'
import UrlForm from '../components/UrlForm'
import { useNavigate } from '@tanstack/react-router'

const HomePage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate({ to: '/auth', search: { mode: 'login' } })
  }

  const handleRegister = () => {
    navigate({ to: '/auth', search: { mode: 'register' } })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
      </div>

      <div className="text-center">
        <h2 className="text-lg font-semibold mb-4">
          Would you like to create custom short URLs?
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleRegister}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
