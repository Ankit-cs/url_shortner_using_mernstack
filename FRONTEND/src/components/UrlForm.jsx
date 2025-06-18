import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState('');
  // const { isAuthenticated } = useSelector((state) => state.auth);

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
    setShortenedUrl('');
    if (touched) setError(validateUrl(e.target.value));
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateUrl(url));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateUrl(url);
    setTouched(true);
    setError(err);
    if (!err) {
      try {
        const res = await fetch('https://url-shortner-backend-ew7x.onrender.com/api/shorten', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ originalUrl: url }),
        });

        const data = await res.json();
        if (res.ok) {
          setShortenedUrl(data.shortUrl); // assuming backend returns { shortUrl: '...' }
          setError('');
        } else {
          setError(data.message || 'Something went wrong. Please try again.');
        }
      } catch (err) {
        setError('Failed to shorten URL. Please try again.');
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

      {shortenedUrl && (
        <div className="mt-4 text-center">
          <p className="text-green-600 text-sm">Shortened URL:</p>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline break-all"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
    </form>
  );
};

export default UrlForm;
