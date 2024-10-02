import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DashSidebar from './DashSidebar';
import { signInFailure, signInSuccess, signoutSuccess } from '../../store/user/userSlice';
import { toast } from 'react-toastify';
import AdminHomeComponent from './AdminHomeComponent';
import AdminAboutComponent from './AdminAboutComponent';
import AdminContactComponent from './AdminContactComponent';
import AdminPostsComponent from './AdminPostsComponent';
import AdminUpdatePostComponent from './UpdatePost';
import AdminTextsComponent from './AdminTextsComponent';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';



function AdminPage() {
// const [adminMenu, setadminMenu] = useState(false)




  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser,adminMenu } = useSelector((state) => state.user);
  const [tab, setTab] = useState('home');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
      // console.log(tabFromUrl)
    }
  }, [location.search]);

  return (
    <div className='min-h-screen w-full  box-border 
     border-yellow-400 relative bg-gray-100 flex   '>
     

    {
     
      <div 
      className={`${adminMenu? 'lg:w-1/5 max-md:flex-1' : 'w-14 '} transition-all duration-200  border-gray-400  min-h-screen `}>
      <DashSidebar adminMenu={adminMenu} />
      </div>
    }


      <div className={`md:flex-1 ${adminMenu && "max-md:hidden" } w-full 
        min-h-full box-border p-2 max-h-screen overflow-y-auto  dark:bg-[#030620] border-black`} >
      
      <div className='w-full uppercase flex items-center justify-around  p-3 bg-[#1a2e44]  text-white
       rounded-sm mb-5 shadow-md shadow-gray-400'>
      <h1 className='text-xl'>Edit {tab} Page</h1>
      {
        tab==="posts" && 
        <Link to={'/create-post'} className=' flex flex-col'>
        <button className='md:w-72 w-full p-3 rounded-lg text-xl text-white font-extrabold bg-gradient-to-tr from-green-700 via-green-500 to-green-300 '>
          Create Post
        </button>
      </Link>
      }
      </div>
      {tab==='home' &&  (<AdminHomeComponent/>)}
      {tab==='' &&  (<AdminHomeComponent/>)} 
      {tab==='about' && (<AdminAboutComponent/>) } 
   
      {tab==='contact' &&  (<AdminContactComponent/>)} 
      {tab==='posts' &&  (<AdminPostsComponent />)} 
      {tab===`updatePost` &&  (<AdminUpdatePostComponent />)} 
      {tab===`texts` &&  (<AdminTextsComponent />)} 
      </div>
    </div>
  )
}

export default AdminPage