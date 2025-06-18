import React from 'react'
import UrlForm from '../components/UrlForm'
import { useSelector } from 'react-redux'
import { useNavigate } from '@tanstack/react-router'

const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />

        {!isAuthenticated && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">Want to create custom URLs?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="text-blue-600 font-semibold hover:underline"
                onClick={() => navigate({ to: '/auth', search: { mode: 'register' } })}
              >
                Sign Up
              </button>
              <button
                className="text-blue-600 font-semibold hover:underline"
                onClick={() => navigate({ to: '/auth', search: { mode: 'login' } })}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
