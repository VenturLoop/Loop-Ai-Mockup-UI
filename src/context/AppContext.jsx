"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

export const AppContext = createContext(); // Ensure this is exported if direct import is needed elsewhere, though useAppContext is preferred.

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedIsDark = localStorage.getItem('isDark');
      if (storedIsDark !== null) {
        return JSON.parse(storedIsDark);
      }
      // Optional: Check system preference if no stored value
      // return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default to light mode
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDark', JSON.stringify(isDark));
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(prev => !prev);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <AppContext.Provider value={{ isDark, toggleDarkMode, sidebarOpen, toggleSidebar, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};
