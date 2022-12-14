import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <div className='h-20 bg-red-500 w-1/2 text-white'>
                <p className='mx-5'>
                    <Link to={"dashboard"} >Dashboard</Link>
                </p>
                <p className='mx-5'>
                    <Link to={"user-managment"} >User Managment</Link></p>
            </div>
            <Outlet />
        </>
    )
}

export default AdminLayout