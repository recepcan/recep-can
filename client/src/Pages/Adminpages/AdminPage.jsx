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



function AdminPage() {

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
    <div className='min-h-screen w-full  box-border 
     border-yellow-400 relative bg-gray-100 flex   '>
     <div className='w-1/5  border-red-400  min-h-screen '>
      <DashSidebar/>
      </div>


      <div className='flex-1  min-h-full box-border p-2 max-h-screen overflow-y-auto bg-white border-black '>
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