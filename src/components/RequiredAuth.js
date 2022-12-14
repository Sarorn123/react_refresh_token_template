import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../redux/slice/authSlice';

const RequiredAuth = ({ allowRoles }) => {
  const location = useLocation();
  const { access_token, user } = useAuth();
  return (
    user?.roles?.find(role => allowRoles?.includes(role)) ?
      <Outlet /> : access_token ? <Navigate to="/unauthorize" state={{ from: location }} replace /> : <Navigate to="/login" />
  )
}

export default RequiredAuth