import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Form from '../Components/Form'
import Connect from '../Components/Connect'

function Contact() {
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      exit={{ opacity: 0 }}
      className='  dark:text-white  transition-colors duration-500 w-full
     flex items-center justify-center min-h-screen dark:bg-gray-900  pt-20'>
     
        <div className=''>
        <Connect />

        </div>
        {/*<Form />*\}
        {/* <div className='bg-white backdrop-blur-lg opacity-80 shadow-lg shadow-gray-400  dark:bg-black/30  dark:border border-sky-300   col-span-1  row-span-1 rounded-lg text-white twxt-xl flex items-center justify-center'> hello world
      </div>
      <div className='bg-white backdrop-blur-lg dark:bg-black/30  dark:border border-sky-300  col-span-1  row-span-1 rounded-lg'>
      </div>
      <div className='bg-white backdrop-blur-lg dark:bg-black/30  dark:border border-sky-300  col-span-1  row-span-1 rounded-lg'>
      </div>
      <div className='bg-white backdrop-blur-lg dark:bg-black/30  dark:border border-sky-300   col-span-1  row-span-1 rounded-lg'>
  </div>*/}

     

    </motion.div>
  )
}

export default Contact