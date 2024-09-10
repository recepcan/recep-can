import React from 'react'
import CreatePost from './CreatePost'
import { Link } from 'react-router-dom'
import GetPosts from '../../Components/GetPosts'
import { Outlet } from 'react-router-dom'
export default function AdminHomeComponent() {
  return (
    <>
    <div className=' w-full   min-h-full flex-1  space-y-5 rounded-lg relative '>
      
  Admin Home Component
     
    </div>
 
    </>
  )
  }



  

//  <h6 className='text-red-500 text-sm'>Dikkat! Eğer bu postun üzerinde tıklarsanız sizi postun içreik sayfasına yönlendirir. sayfada kalabilmek için lütfen tıklamayınız.
//      </h6>