import React from 'react'
import CreatePost from './CreatePost'
import { Link } from 'react-router-dom'
import GetPosts from '../../Components/GetPosts'
import { Outlet } from 'react-router-dom'
export default function AdminHomeComponent() {
  return (
    <>
    <div className=' w-full    min-h-full flex-1  space-y-5 rounded-lg'>
      
      <div className='w-full md:flex-row flex flex-col items-center justify-between  h-full '>
     <div className='flex flex-col space-x-5 w-full md:w-1/2 border-2 border-red-500'>
     <GetPosts limit={1} />
     
     
     </div>
      
     <div className='md:w-1/2 w-full p-5 space-y-5  rounded-lg h-full shadow-md shadow-gray-400' >
     <div>
<h1 className='text-2xl uppercase  font-mono'>Yan taraftaki gibi bir post oluşturmak için butona tıkla. bu postlar home page içinde listelenir.</h1>
</div>
     <Link to={'/create-post'} className='w-full flex flex-col'>
        <button className='md:w-72 w-full p-4 rounded-lg  text-white font-extrabold bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500  '>
          Create Post
        </button>
      </Link>
    


      </div>
      </div>
     
    </div>
 
    </>
  )
  }

 {/* <h6 className='text-red-500 text-sm'>Dikkat! Eğer bu postun üzerinde tıklarsanız sizi postun içreik sayfasına yönlendirir. sayfada kalabilmek için lütfen tıklamayınız.
     </h6>*/}