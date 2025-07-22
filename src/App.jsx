import React, { useEffect } from 'react'


import AppRouter from './routes/AppRouter'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

const app=()=> {
   const { theme, toggleTheme } = useTheme();

   useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);


  return (
    <div className='bg-white dark:bg-black text-black dark:text-white'>
      
     
      <Navbar/>
      <AppRouter/>
      <Footer/>
   
     
    </div>
  )

}
export default app