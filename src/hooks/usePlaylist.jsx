// src/hooks/usePlaylist.jsx

import { useState } from 'react';

const usePlaylist = () => {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = (playlistName) => {
    setPlaylists([...playlists, { name: playlistName, videos: [] }]);
  };

  const deletePlaylist = (playlistIndex) => {
    const updatedPlaylists = [...playlists];
    updatedPlaylists.splice(playlistIndex, 1);
    setPlaylists(updatedPlaylists);
  };

  const addVideoToPlaylist = (playlistIndex, video) => {
    const updatedPlaylists = [...playlists];
    updatedPlaylists[playlistIndex].videos.push(video);
    setPlaylists(updatedPlaylists);
  };

  const removeVideoFromPlaylist = (playlistIndex, videoIndex) => {
    const updatedPlaylists = [...playlists];
    updatedPlaylists[playlistIndex].videos.splice(videoIndex, 1);
    setPlaylists(updatedPlaylists);
  };

  return {
    playlists,
    createPlaylist,
    deletePlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
  };
};

export default usePlaylist;
