import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import useAxiosPrivate from '../api/axiosPrivate';
import { logout, useAuth } from '../redux/slice/authSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const axios = useAxiosPrivate();
    const { access_token } = useAuth();

    const signOut = async () => {
        try {
            await axios.get("/logout");
            dispatch(logout());
            navigate('/login');
        } catch (error) {}
    }

    return (
        <div className='h-[5rem] bg-green-600 text-white'>
            <ul className='flex items-center'>
                <li className='ml-5'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className='ml-5'>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li className='ml-5'>
                    <Link to={"/about"}>About</Link>
                </li>
                {
                    access_token && <button
                        className='bg-red-500 px-4 py-2 rounded-lg active:bg-red-400 ml-5'
                        onClick={signOut}>
                        Log out
                    </button>
                }
            </ul>
        </div>
    )
}

export default Header