import React from 'react'
import UrlForm from '../components/UrlForm'
import { useNavigate } from '@tanstack/react-router'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between p-4">
      <div className="w-full flex-grow flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>

          <div className="text-sm text-center mb-4 text-gray-600">
            Want custom URL?{" "}
            <button
              onClick={() => navigate({ to: '/auth', search: { form: 'signup' } })}
              className="text-blue-600 hover:underline font-semibold mr-2"
            >
              Signup
            </button>
            /
            <button
              onClick={() => navigate({ to: '/auth', search: { form: 'login' } })}
              className="text-blue-600 hover:underline font-semibold ml-2"
            >
              Login
            </button>
          </div>

          <UrlForm buttonLabel="Get your link for free" />
        </div>
      </div>

      <footer className="text-xs text-gray-500 mt-4 text-center">
        © {new Date().getFullYear()} Ankit Kumar. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage
