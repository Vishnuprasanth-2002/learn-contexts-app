import React, { createContext, useState } from "react";

// Create two context:
// ThemeContext: to query the context state
// ThemeDispatchContext: to mutate the context state
const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);

const UserContext = createContext(undefined);
const setUserContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    value: "light",
    browser: "firefox",
  });
  const [user, setUser] = useState({
    name: 'hi',
    image: 'mm'
  });

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        <UserContext.Provider value={user}>
          <setUserContext.Provider value={setUser}>
            {children}
          </setUserContext.Provider>
        </UserContext.Provider>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider,UserContext, setUserContext, ThemeContext, ThemeDispatchContext };
