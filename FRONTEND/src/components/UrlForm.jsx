import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const validateUrl = (value) => {
    if (!value) return 'We\'ll need a valid URL, like "super-long-link.com/shorten-it"';
    try {
      new URL(value.startsWith('http') ? value : `http://${value}`);
      return '';
    } catch {
      return 'We\'ll need a valid URL, like "super-long-link.com/shorten-it"';
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
    if (touched) setError(validateUrl(e.target.value));
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateUrl(url));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateUrl(url);
    setTouched(true);
    setError(err);
    if (!err) {
      if (!isAuthenticated) {
        navigate({ to: '/auth' });
      } else {
        console.log('Shortening URL:', url);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Enter your URL"
        className={`border p-2 rounded ${error ? 'border-orange-500' : 'border-gray-300'}`}
        value={url}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && (
        <p className="text-orange-500 text-sm">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Get your link for free
      </button>
    </form>
  );
};

export default UrlForm;
