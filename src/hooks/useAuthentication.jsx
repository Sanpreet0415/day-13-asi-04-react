// src/hooks/useAuthentication.jsx

import { useState } from 'react';

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Implement your authentication logic here
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
};

export default useAuthentication;
