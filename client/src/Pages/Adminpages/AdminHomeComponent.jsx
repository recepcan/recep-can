import React from 'react'
import CreatePost from './CreatePost'
import { Link } from 'react-router-dom'

export default function AdminHomeComponent() {
  return (
    <div className='bg-white w-full  min-h-[700px] flex-1 p-5 space-y-5'>
      <div className='w-full h-16 bg-gray-100 p-3 rounded-sm mb-5 shadow-lg shadow-gray-400'>
        <h1>This is the Home page component. You can manage the home page in here</h1>
      </div>
      <Link to={'/create-post'} className='w-1/2 '>
        <button className='p-4 rounded-lg  text-white font-extrabold bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500 w-1/2 h-full'>
          Create Post
        </button>
      </Link>
    </div>)
  }