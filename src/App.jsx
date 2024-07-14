// src/App.jsx

import React from 'react';
import useYouTubeAPI from './hooks/useYouTubeAPI';
import useAuthentication from './hooks/useAuthentication';
import usePlaylist from './hooks/usePlaylist';
import VideoSearch from './components/VideoSearch';
import VideoList from './components/VideoList';
import PlaylistManager from './components/PlaylistManager';

const App = () => {
  const { searchResults, isLoading, error, searchVideos } = useYouTubeAPI();
  const { isLoggedIn, login, logout } = useAuthentication();
  const { playlists, createPlaylist, deletePlaylist, addVideoToPlaylist, removeVideoFromPlaylist } = usePlaylist();

  return (
    <div>
      <h1>YouTube Video Application</h1>

      <VideoSearch onSearch={searchVideos} />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {searchResults.length > 0 && (
        <VideoList videos={searchResults} />
      )}

      {isLoggedIn ? (
        <div>
          <button onClick={logout}>Logout</button>
          <PlaylistManager
            playlists={playlists}
            createPlaylist={createPlaylist}
            deletePlaylist={deletePlaylist}
            addVideoToPlaylist={addVideoToPlaylist}
            removeVideoFromPlaylist={removeVideoFromPlaylist}
          />
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default App;
