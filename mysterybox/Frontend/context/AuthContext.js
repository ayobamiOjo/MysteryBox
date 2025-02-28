// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Hard-coded admin credentials
  const ADMIN_EMAIL = 'admin';
  const ADMIN_PASSWORD = 'admin';

  function login(email, password) {
    // Compare against hard-coded admin credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setUser({ email: ADMIN_EMAIL });
    } else {
      alert('Invalid credentials');
    }
  }

  function logout() {
    setIsLoggedIn(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}
