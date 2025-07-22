import React from 'react'

import UserList from './UserList'
import { Link } from 'react-router-dom'
import WeatherApp from '../components/Weather'

const Home = () => {
  return (
    <div>
        
          <Link to="users" className='text-blue-600 underline' >
        view all users
        </Link>
        
        <WeatherApp/>
      
       
    </div>
  )
}

export default Home