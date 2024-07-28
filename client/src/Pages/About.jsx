import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import headerSlice from '../store/headerSlice'
import ProfilCard from '../Components/ProfilCard'
import ToggleMenu from '../Components/ToggleMenu'
import Items from '../Components/İtems'
import { FaAnglesDown } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { FaReact, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import ThreeDCard from '../Components/ThreeDCard'
import profil from '../../public/profil.jpeg'
import Elements from '../Components/Elements'
import Connect from '../Components/Connect'
// import Hizmetler from '../Components/Hizmetler'

function About() {
  const { Links, LinksEnglish, language, menu, darkMode } = useSelector(state => state.header)










  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      exit={{ opacity: 0 }}
      className='flex h-full  w-full flex-col z-10 items justify-center text-center transition-colors duration-300 bg-zinc-100
    dark:bg-gray-900 dark:text-white dark:z-10 '>


      {
        !menu &&
        <div className='flex  flex-col '>

          <div className='w-full p-10 flex min-[650px]:h-screen items-center justify-center'>

            <div className=' w-2/3 p-10 rounded-lg shadow-md shadow-gray-400   hover:shadow-gray-600 transition-all dark:bg-[#17252a]  space-y-5 flex flex-col items-start text-left justify-center'>
              {/*  <ProfilCard />    
                 <FaAnglesDown className='max-[600px]:h-10 z-10 max-[600px]:w-10 max-[600px]:mt-14 max-[600px]:my-5 p-2 rounded-full hover:bg-purple-900 border-2 transition-all border-purple-900  text-purple-600 ' size={64} />  
       */}

              <h1 className='text-6xl  tracking-wide leading-tight font-extrabold bg-gradient-to-b from-[#0c0b10]  via-[#3aafa9] bg-clip-text text-transparent dark:bg-gradient-to-br dark:from-green-100 dark:via-green-500 dark:to-green-900'>Hello , i'm Recep, a passionate front-end developer, 
              <span className='font-extrabold dark:text-white text-black'>specializing in TypeScript, React, and Next.js.</span></h1>

              <p className=' text-lg font-mono font-semibold'>React is my playground. I thrive on creating interactive and responsive web applications that provide an exceptional user experience. From component design to state management, I've got React covered.</p>

              <div className='flex m-10 w-full h-20  space-x-10'>
                <button className='p-5 text-xl w-56 rounded-lg bg-gradient-to-b hover:scale-95 hover:bg-gradient-to-l transition-all  duration-500 from-green-100 via-teal-500 to-green-900 '>
                  Get In Touch</button>
                <button className='p-5 text-xl w-56 rounded-lg bg-transparent border-2 border-green-500 hover:border-none hover:scale-95 hover:bg-gradient-to-l transition-all  duration-500 from-green-100 via-teal-500-500 to-green-900 '>
                  view my works</button>
              </div>
            </div>

            <div className='w-1/3  rounded flex items-center justify-center relative'>

              <div className='bg-gradient-to-tr  from-green-100 via-teal-500-500 to-green-900  top-24  p-2 rounded-lg'>
                <img src={profil} alt="" className='w-[400px] rounded-lg object-cover' />

              </div>
            </div>

          </div>


          {/*<Hizmetler /> */}


          <div className='w-full flex flex-col items-center space-y-10  h-[700px]'>
            <h1 className='text-5xl  bg-clip-text text-transparent  from-[#0c0b10]  via-[#3aafa9] to-sky-300 bg-gradient-to-tr font-bold font-sans z-10 dark:text-shadow-lg  dark:text-transparent  dark:from-green-100 dark:via-green-500 dark:to-green-700'>
              Technologies I Am Using
            </h1>

            <hr className='w-[90%]  border-green-500' />

            <div className='flex w-full flex-wrap  justify-center items-center gap-3 '>

              <Items />

            </div>

          </div>



          <Connect />



        </div>
      }

    </motion.div>
  )
}

export default About

