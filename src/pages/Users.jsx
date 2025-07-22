import React from 'react'
import { Link, Outlet, useParams} from 'react-router-dom';


const User = () => {
    const{id}=useParams();
  return (
   <div>

    <h2 className='text-2xl ' >Users section</h2>
    <Link to="/users">
    View users
    </Link>
    <Outlet/>
   </div>
  )
}

export default User