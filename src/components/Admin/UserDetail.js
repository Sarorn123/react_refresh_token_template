import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet, useParams } from 'react-router-dom'

const UserDetail = () => {
    const { id } = useParams();
    return (
        <>
            <h1>UserDetail {id}</h1>
            <p>Say Something About User</p>
            <div className='bg-gray-800 text-white'>
                <p><Link to="history">History</Link></p>
                <p><Link to="family">Family</Link></p>
            </div>
            <Outlet />
        </>
    )
}

export default UserDetail