import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('token'));

  // Check for existing session on component mount
  useEffect(() => {
    // Check local storage or make an API call to validate existing session
    const checkExistingSession = async () => {
      // Implement session check logic here
      // If a valid session exists, setUser accordingly
    };
    checkExistingSession();
  }, []);

  const login = async (token) => {
    localStorage.setItem('token', token);
    setUser(token);
    // Implement login logic here
    // Make API call to authenticate user
    // If successful, update user state
    // Example: setUser({ id: 'user_id', name: 'User Name' });
  };

  const logout = () => {
    // Implement logout logic here
    // Clear user data and any stored tokens
    setUser(null);
  };

  return <AuthContext.Provider value={
    {user, login, logout}
  }>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
