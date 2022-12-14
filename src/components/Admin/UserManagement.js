import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserManagement = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1>User List</h1>

      <button onClick={() => navigate('32')}>User Detail</button>
    </div>
  )
}

export default UserManagement