import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../redux/slice/authSlice';

const ProtectIsAuthenticated = () => {
    const { access_token } = useAuth();
    return (
        access_token ? <Navigate to="/" /> : <Outlet />
    )
}

export default ProtectIsAuthenticated