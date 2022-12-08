import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredential } from '../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../api/axiosPublic';

function Login() {

  const axios = useAxiosPublic();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post('/login', {});
    dispatch(setCredential(res.data));
    navigate('/');
  }

  return (
    <div>
      <button onClick={login} className="bg-blue-500 m-5 text-white px-4 py-2">Login</button>
    </div>
  )
}

export default Login