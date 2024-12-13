import GetPosts from '../Components/GetPosts'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Hizmetler from '../Components/hizmetler'

import Text from './CreateText'
import ContentCard from '../Components/ContentCard'
import Loading from '../Components/Loading'
import { fetchPost6 } from '../store/postSlice'
import { toast } from 'react-toastify'

function ProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity:0}}
      transition={{ duration: 1 }}
      className='dark:text-white  transition-colors duration-500 w-full  relative  border-black
     flex flex-col items-center justify-center  dark:bg-[#030620] min-h-screen  md:pt-20'
    >

      
      <div className='  dark:bg-gradient-to-t  text-center
       '>
      <h1 className='p-10 text-5xl font-semibold font-inter 
      bg-clip-text text-transparent bg-gradient-to-r
       from-sky-500 via-purple-500 to-red-500
       dark:from-sky-100 dark:via-sky-300 dark:to-sky-500'>
        My Works
       </h1>
      <GetPosts  limit={50}/>
      </div>

    </motion.div>
  )
}

export default ProjectPage