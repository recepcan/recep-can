import React from 'react'

import Items from '../Components/İtems'

import { motion } from 'framer-motion'

import AboutCard from '../Components/AboutCard'


// import Hizmetler from '../Components/Hizmetler'

function About() {
 
  // const { Links, LinksEnglish, language, menu, darkMode } = useSelector(state => state.header)



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className='flex min-h-screen relative w-full flex-col z-10 items-center justify-center text-center transition-colors duration-300 bg-zinc-100
    dark:bg-[#030620] dark:text-white dark:z-10 max-md:pt-0 max-xl:pt-16  border-purple-400 '>
      
        
          <AboutCard  />


          {/*<Hizmetler />  <Text/> */}

          <div className='w-full flex flex-col md:p-10 p-5  border-red-500 items-center space-y-10  min-h-[700px]
           bg-gradient-to-b from-gray-100 via-sky-200 to-gray-100
            dark:from-[#030620] dark:via-[#030620] dark:to-black'>
            <h1 className='lg:text-5xl  text-2xl  bg-clip-text text-transparent  bg-gradient-to-r 
            
            from-blue-600 via-blue-800 to-purple-800 p-5
          dark:bg-gradient-to-r dark:from-blue-100 dark:via-blue-200 dark:to-blue-300
            font-bold font-inter z-10   '>
              Technologies I Am Using
            </h1>

            <hr className='w-[90%]  border-sky-500' />

            <div className='flex w-full flex-wrap  justify-center items-center gap-3 '>

              <Items />

            </div>

          </div>

        
     

    </motion.div>
  )
}

export default About

