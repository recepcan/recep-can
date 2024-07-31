import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink, useLocation } from 'react-router-dom'
import { signoutSuccess } from '../../store/user/userSlice';
import { toast } from 'react-toastify';

function DashSidebar() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [tab, setTab] = useState('');
    const handleSignout = async () => {
        try {
          const res = await fetch('/api/auth/sign-out', {
            method: 'POST',
          });
          const data = await res.json();
          if (!res.ok) {
           toast.error(data.message);
          } else {
            dispatch(signoutSuccess());
          }
        } catch (error) {
         toast.error(error)
        }
      };
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
          setTab(tabFromUrl);
          console.log(tabFromUrl)
        }
      }, [location.search]);

      console.log(currentUser.isAdmin)
    return (
        <div className='w-full h-full flex  flex-col bg-white  space-y-5   rounded-lg  p-10  shadow-lg shadow-gray-400'>
       <div className='flex items-center justify-center space-x-5 bg-gray-50 rounded-lg p-3'>
       <h1>{currentUser.email}</h1> 
       <img src={currentUser.profilePicture} className='w-10 h-10 rounded-full' />   
       </div>
       
        <h1 className='text-3xl text-red-500 font-bold'>Pages </h1>
            <NavLink className='  p-4 rounded-lg shadow-lg  shadow-gray-400' to='/admin?tab=home' >

                Home
            </NavLink>

            <NavLink className=' p-4 rounded-lg shadow-lg shadow-gray-400' to='/admin?tab=about'>

                About
            </NavLink>

            <NavLink className=' p-4 rounded-lg shadow-lg shadow-gray-400' to='/admin?tab=contact'>

                contact
            </NavLink>
            {location.pathname=='/admin' && <button onClick={handleSignout} className='  bg-sky-200 text-sky-800 font-semibold p-2 rounded-lg'>SignOut</button>
            }
        </div>
    )
}

export default DashSidebar