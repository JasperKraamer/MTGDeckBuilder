import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('token'));


  const login = async (token) => {
    localStorage.setItem('token', token);
    setUser(token);
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={
    {user, login, logout}
  }>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
