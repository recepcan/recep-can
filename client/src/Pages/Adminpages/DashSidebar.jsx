import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Link, NavLink, useLocation } from 'react-router-dom'
import { signoutSuccess } from '../../store/user/userSlice';
import { toast } from 'react-toastify';
import { AiFillLeftCircle } from 'react-icons/ai';

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

      // console.log(currentUser.isAdmin)
    return (
        <div className='w-full min-h-screen flex  flex-col justify-between bg-[#1a2e44]  space-y-5    shadow-lg shadow-gray-400'>
       
       
            <div className='flex flex-col  '>
            <h1 className='text-4xl text-white font-extrabold font-mono p-5'>Pages </h1>

            <NavLink className='w-full rounded-none p-4   shadow-sm   hover:bg-[#38445e] text-gray-400 active:text-white flex items-center justify-start text-xl font-extrabold'   to='/admin?tab=home' >

                Home
            </NavLink>

            <NavLink className=' p-4  rounded-none shadow-sm  hover:bg-[#38445e] text-gray-400 active:text-white flex items-center justify-start text-xl font-extrabold'   to='/admin?tab=about'>

                About
            </NavLink>

            <NavLink className=' p-4  rounded-none shadow-sm  hover:bg-[#38445e] text-gray-400 active:text-white flex items-center justify-start text-xl font-extrabold'   to='/admin?tab=contact'>

                Contact
            </NavLink>
            <NavLink className=' p-4  rounded-none shadow-sm  hover:bg-[#38445e] text-gray-400 active:text-white flex items-center justify-start text-xl font-extrabold'   to='/admin?tab=posts'>

                Posts
            </NavLink>
            <NavLink className=' p-4  rounded-none shadow-sm  hover:bg-[#38445e] text-gray-400 active:text-white flex items-center justify-start text-xl font-extrabold'   to='/admin?tab=texts'>

                Texts
            </NavLink>
            </div>
           
            <div className='flex items-center justify-between text-white bg-slate-700  p-5 shadow-sm shadow-gray-400'>
            {location.pathname=='/admin' && 
              <button onClick={handleSignout} className='  text-white  bg-red-500  font-semibold p-1 rounded-full'>
             <AiFillLeftCircle className='text-3xl '/> 
             </button>
            }
            <Link to={'/'} className='  '>
      <h6 className='text-md '>{currentUser.email}</h6> 
      </Link>
      <img src={currentUser.profilePicture} className='w-8 h-8 rounded-full ' /> 
      </div>
        </div>
    )
}

export default DashSidebar