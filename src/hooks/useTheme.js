import React, { useContext } from 'react'
import { Themecontext } from '../context/ThemeContext'

export const useTheme = () => {
    const context= useContext(Themecontext);
    if (!context){
        throw new Error("useTheme must be used within ThemeProvider")
    }
  return context;
   
  
}
