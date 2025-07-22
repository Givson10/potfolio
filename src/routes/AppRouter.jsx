import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from '../components/User'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Login from '../pages/Login'
import Users from '../pages/Users'
import Home from '../pages/Home'
import UserList from '../pages/UserList'
import UserDetail from '../pages/UserDetail'

const AppRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>

<Route path="/aboutme" element={<About/>}  />
<Route path="/contact" element={<Contact/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/login" element={<Login/>}/>
<Route path="/users" element={<Users/>}/>


  <Route path="/users" element={<Users/>}>
  <Route index element={<UserList/>}/>
  <Route path=":id" element={<UserDetail/>}/>

</Route>



   </Routes>
  )
}

export default AppRouter