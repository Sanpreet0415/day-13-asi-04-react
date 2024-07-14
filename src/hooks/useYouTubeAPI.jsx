// useYouTubeAPI.jsx

import { useState, useEffect } from 'react';

const useYouTubeAPI = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchVideos = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=YOUR_YOUTUBE_API_KEY`);
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      setSearchResults(data.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchResults,
    isLoading,
    error,
    searchVideos,
  };
};

export default useYouTubeAPI;
