import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'

function Akademik() {
  const { language } = useSelector(state => state.header)
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}  
    className='dark:bg-[#1a202c] w-full  transition-colors duration-300 dark:text-white h-screen flex items-center justify-center'>
      {
        language ? 'AKademik' : 'Academic'
      }
      </motion.div>
  )
}

export default Akademik