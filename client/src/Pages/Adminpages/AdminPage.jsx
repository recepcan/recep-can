import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DashSidebar from './DashSidebar';



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
    <div className='min-h-screen relative bg-gray-100 flex items-center justify-center '>

      <div>
      <DashSidebar/>
      </div>


      <div>
      {tab==='about' &&  "hello from about"} 
      {tab==='home' &&  "hello from home"} 
      {tab==='contact' &&  "hello from contact"} 
      </div>
    </div>
  )
}

export default AdminPage