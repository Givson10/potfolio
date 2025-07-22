import React, { createContext, useState } from 'react'
export const Themecontext=createContext();

export function ThemeProvider({children}) {
  const [theme,setTheme]=useState("light");

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
    return (
<Themecontext.Provider value={{theme, toggleTheme}} >
  {children}
</Themecontext.Provider>
  );
}




