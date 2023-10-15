import React, { createContext, useState } from "react";

const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);
const UserContext = createContext(undefined);
const setUserContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    value: "light",
    browser: "firefox",
  });

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    image: "",
  });

  return (
    <UserContext.Provider value={user}>
      <setUserContext.Provider value={setUser}>
        {children}
      </setUserContext.Provider>
    </UserContext.Provider>
  );
}

export {
  ThemeProvider,
  UserProvider,
  UserContext,
  setUserContext,
  ThemeContext,
  ThemeDispatchContext,
};
