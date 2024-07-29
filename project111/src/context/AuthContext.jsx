


// // AuthContext.jsx
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [users, setUsers] = useState([]); // List of registered users

//   const register = (newUser) => {
//     // Check if user already exists
//     const existingUser = users.find(user => user.email === newUser.email);
//     if (existingUser) {
//       throw new Error('User already exists');
//     }
//     // Add new user to the list
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//   };

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout, register, users }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [users, setUsers] = useState([]); // List of registered users

//   const register = (newUser) => {
//     // Check if user already exists
//     const existingUser = users.find(user => user.email === newUser.email);
//     if (existingUser) {
//       throw new Error('User already exists');
//     }
//     // Add new user to the list
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//   };

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout, register, users }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]); // List of registered users

  const register = (newUser) => {
    // Check if user already exists
    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    // Add new user to the list
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register, currentUser, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
