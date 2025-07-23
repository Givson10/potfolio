import React from 'react'

import UserList from './UserList'
import { Link } from 'react-router-dom'
import WeatherApp from '../components/Weather'
import Portfolio4 from '../components/Hero'
import NewsList from '../components/News'
import TypingTest from '../components/TypingText'

const Home = () => {
  return (
    <div>
      <Portfolio4/>
      <NewsList/>
      <TypingTest/>
        
          <Link to="users" className='text-blue-600 underline' >
        view all users
        </Link>
        
        <WeatherApp/>
      
       
    </div>
  )
}

export default Home