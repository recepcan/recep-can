import React from 'react'
import { motion } from 'framer-motion'

function OnlineGörüşme() {
  return (
    <motion.div  
    initial={{opacity:0}}
    animate={{opacity:1}}  
    className='w-full h-screen flex items-center justify-center transition-colors duration-300 '>
    Online Görüşme
    </motion.div>
  )
}

export default OnlineGörüşme