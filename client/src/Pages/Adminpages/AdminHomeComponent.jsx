import React from 'react'
import CreatePost from './CreatePost'
import { Link } from 'react-router-dom'
import GetPosts from '../../Components/GetPosts'

export default function AdminHomeComponent() {
  return (
    <div className='bg-white w-full  min-h-[700px] flex-1 p-5 space-y-5 rounded-lg'>
      <div className='w-full h-16  p-3 rounded-sm mb-5 shadow-md shadow-gray-400'>
        <h1>This is the Home page component. You can manage the home page in here</h1>
      </div>
      <div className='w-full flex items-center justify-between  h-full '>
     <div className='flex flex-col space-x-5 w-1/2 p-5'>
     <GetPosts limit={1} />
     <h6 className='text-red-500 text-sm'>Dikkat! Eğer bu postun üzerinde tıklarsanız sizi postun içreik sayfasına yönlendirir. sayfada kalabilmek için lütfen tıklamayınız.</h6>
     
     </div>
      
     <div className='w-1/2 p-5 space-y-5  rounded-lg h-full shadow-md shadow-gray-400' >
     <div>
<h1 className='text-2xl uppercase  font-mono'>Yan taraftaki gibi bir post oluşturmak için butona tıkla. bu postlar home page içinde listelenir.</h1>
</div>
     <Link to={'/create-post'} className='w-full flex flex-col'>
        <button className='w-72 p-4 rounded-lg  text-white font-extrabold bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500  '>
          Create Post
        </button>
      </Link>


      </div>
      </div>
      
    </div>)
  }