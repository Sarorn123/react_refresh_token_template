import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../redux/slice/authSlice';

const RequiredAuth = () => {
  const { access_token } = useAuth();
  return (
    access_token ? <Outlet /> : <Navigate to="/login" />
  )
}

export default RequiredAuth