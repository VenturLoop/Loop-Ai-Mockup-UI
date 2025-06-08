import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [exampleState, setExampleState] = useState('Hello from Context');
  // Add more state and functions as needed

  return (
    <AppContext.Provider value={{ exampleState, setExampleState }}>
      {children}
    </AppContext.Provider>
  );
};
