import React, { useEffect, useState } from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import { useNavigate } from '@tanstack/react-router'
import { useSelector } from 'react-redux'

const DashboardPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Give a small delay to allow authentication state to be set
    const timer = setTimeout(() => {
      if (!isAuthenticated || !user) {
        navigate({ to: '/auth' });
      } else {
        setIsLoading(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isAuthenticated, user, navigate]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Don't render dashboard if not authenticated
  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
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
