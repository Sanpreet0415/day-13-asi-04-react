// src/components/PlaylistManager.jsx

import React, { useState } from 'react';

const PlaylistManager = ({ playlists, createPlaylist, deletePlaylist, addVideoToPlaylist, removeVideoFromPlaylist }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleCreatePlaylist = () => {
    createPlaylist(playlistName);
    setPlaylistName('');
  };

  return (
    <div>
      <h2>Playlist Manager</h2>
      <input
        type="text"
        placeholder="Enter playlist name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <button onClick={handleCreatePlaylist}>Create Playlist</button>

      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>
            <h3>{playlist.name}</h3>
            <button onClick={() => deletePlaylist(index)}>Delete Playlist</button>
            <ul>
              {playlist.videos.map((video, videoIndex) => (
                <li key={video.id}>
                  <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                  <p>{video.snippet.title}</p>
                  <button onClick={() => removeVideoFromPlaylist(index, videoIndex)}>Remove Video</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistManager;
