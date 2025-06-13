import React, { useState } from 'react';
import axios from 'axios';

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/create", 
        { url }  // Match backend expected field name
      );
      setShortUrl(data.shortUrl); // Store response
    } catch (err) {
      setError(err.response?.data?.message || "Failed to shorten URL");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter your URL
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Shorten URL
        </button>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {shortUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Short URL:</p>
            <a 
              href={shortUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 break-all"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default UrlForm;