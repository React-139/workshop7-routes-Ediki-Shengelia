import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../constants/routers';

const Users = ({user}) => {
  const navigate = useNavigate();

  if (user.name !== "tato" && user.passowrd !== "jakhua") {
  navigate(routes.HOME)
  }
  
  return (
    <div>
      <h1>Users</h1>
      <button onClick={()=> navigate(routes.HOME)}>go to home route</button>
    </div>
  )
}

export default Users