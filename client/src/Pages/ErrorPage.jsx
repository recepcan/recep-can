import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function ErrorPage() {
   const location =useLocation()

  return (
    <div className='w-full min-h-screen flex flex-col space-y-8 items-center justify-center'>
    <h1 className='text-red-500 font-extrabold text-5xl'>404</h1>
    <div>
    '<span className='font-bold text-blue-700 '> {location.pathname} </span>' page  is not found 
    </div>
    <div className='p-2 rounded-lg bg-green-700 text-white'>
    <Link to='/'>Go Home</Link>
    </div>
    </div>
  )
}

export default ErrorPage