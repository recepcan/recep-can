import React from 'react'
import CreatePost from './CreatePost'
import { Link } from 'react-router-dom'
import GetPosts from '../../Components/GetPosts'
import { Outlet } from 'react-router-dom'
export default function AdminHomeComponent() {
  return (
    <>
    <div className=' w-full    min-h-full flex-1  space-y-5 rounded-lg relative '>
      
      <div className='w-full md:flex-row flex flex-col items-center justify-between  h-full '>
     {/*<div className='flex flex-col space-x-5 w-full md:w-1/2  border-red-500'>
     <GetPosts limit={1} />
     
     
     </div>*/}
      
     <div className='md:w-1/2 w-full p-5 space-y-5  rounded-lg h-full shadow-md shadow-gray-400' >
     <div>
</div>
     
    


      </div>
      </div>
     
    </div>
 
    </>
  )
  }



  

//  <h6 className='text-red-500 text-sm'>Dikkat! Eğer bu postun üzerinde tıklarsanız sizi postun içreik sayfasına yönlendirir. sayfada kalabilmek için lütfen tıklamayınız.
//      </h6>