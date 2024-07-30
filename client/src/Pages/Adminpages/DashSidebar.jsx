import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink, useLocation } from 'react-router-dom'

function DashSidebar() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
          setTab(tabFromUrl);
          console.log(tabFromUrl)
        }
      }, [location.search]);
    return (
        <div className='w-1/4 h-[700px] flex  flex-col bg-white absolute space-y-5  left-5 top-20 rounded-lg  p-10  shadow-lg shadow-gray-400'>
            <h1 className='text-3xl text-red-500 font-bold'>Pages </h1>
            <NavLink className='bg-gray-50  p-2 rounded-lg shadow-lg  shadow-gray-400' to='/admin?tab=home' >

                Home
            </NavLink>

            <NavLink className='bg-gray-50 p-2 rounded-lg shadow-lg shadow-gray-400' to='/admin?tab=about'>

                About
            </NavLink>

            <NavLink className='bg-gray-50 p-2 rounded-lg shadow-lg shadow-gray-400' to='/admin?tab=contact'>

                contact
            </NavLink>
        </div>
    )
}

export default DashSidebar