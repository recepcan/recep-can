import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Loading() {
  return (
    <div className='max-h-screen  flex items-center justify-center 
    absolute top-0 left-0 bottom-0 right-0 z-50 bg-gray-100 dark:bg-gray-900 dark:text-white '>
    Loading...  <AiOutlineLoading3Quarters />
    </div>
  )
}

export default Loading