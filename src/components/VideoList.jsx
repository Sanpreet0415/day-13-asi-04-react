// src/components/VideoList.jsx

import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
