import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'


function CalismaAlanlari() {
  const { language } = useSelector(state => state.header)

  return (
    <motion.div  
    initial={{opacity:0}}
    animate={{opacity:1}}  
    className='dark:bg-[#1a202c] dark:text-white transition-colors duration-300 h-screen flex items-center justify-center'>
      {language ?
        "ÇalışmaAlanları"
        :
        "Services"
      }
    </motion.div>
  )
}

export default CalismaAlanlari