import React from 'react'
import CreatePost from './CreatePost'
import { Link } from 'react-router-dom'

export default function AdminHomeComponent() {
  return (
    <div className='bg-white ml-2 min-h-[700px] w-full p-5 space-y-5'>
      <div className='w-full h-16 bg-gray-300 p-3 rounded-sm '>
        <h1>This is the Home page component. You can manage the home page in here</h1>
      </div>
      <Link to={'/create-post'} className='w-1/2'>
        <button className='p-4 rounded-lg text-white font-extrabold bg-gradient-to-tr from-green-400 via-teal-600 to-green-800 w-full h-full'>
          Create Post
        </button>
      </Link>
    </div>)
  }