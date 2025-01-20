import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  return (
    <div className='max-h-screen  flex items-center justify-center 
    w-full min-h-[600px]  z-50  rounded-lg  dark:text-white '>
      
    <Skeleton  className='w-96 min-h-screen ' />
    </div>
  )
}

export default Loading

{/*
  <div className='animate-spin-slow  '>
      <AiOutlineLoading3Quarters className='w-16 h-16'/></div>
  */}