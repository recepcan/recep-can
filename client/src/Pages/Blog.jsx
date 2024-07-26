import React from 'react'
import { motion } from 'framer-motion'

function Blog() {
  return (
    <motion.div  
    initial={{opacity:0}}
    animate={{opacity:1}}  
    className='dark:bg-[#1a202c] transition-colors duration-300 dark:text-white h-screen flex items-center justify-center '>
   Blog
    </motion.div>
  )
}

export default Blog