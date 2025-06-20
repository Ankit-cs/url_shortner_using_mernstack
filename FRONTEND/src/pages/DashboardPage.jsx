import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import { useNavigate } from '@tanstack/react-router'

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen   bg-gray-100 flex flex-col items-center justify-center p-4">
    <div className="bg-white -mt-20 p-8 rounded-lg shadow-md w-full max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate({ to: '/' })}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="text-2xl font-bold">URL Shortener</h1>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>
      <UrlForm/>
      <UserUrl/>
    </div>
  </div>
  )
}

export default DashboardPage
