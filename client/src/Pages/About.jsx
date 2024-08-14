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
import Elements from '../Components/Elements'
import Connect from '../Components/Connect'
import AboutCard from '../Components/AboutCard'
import Text from './CreateText'
import { fetchTextById } from '../store/textsSlice'
import Loading from '/src/Components/Loading.jsx';

// import Hizmetler from '../Components/Hizmetler'

function About() {
  // const { Links, LinksEnglish, language, menu, darkMode } = useSelector(state => state.header)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      exit={{ opacity: 0 }}
      className='flex min-h-screen relative w-full flex-col z-10 items-center justify-center text-center transition-colors duration-300 bg-zinc-100
    dark:bg-gray-900 dark:text-white dark:z-10 max-lg:pt-0 max-xl:pt-16  border-purple-400 '>
      
        
          <AboutCard  />


          {/*<Hizmetler />  <Text/> */}

          <div className='w-full flex flex-col md:p-10 p-5  border-red-500 items-center space-y-10  min-h-[700px]
           bg-gradient-to-t from-gray-100 via-sky-200 to-gray-100 dark:from-gray-900 dark:via-teal-900 dark:to-gray-900'>
            <h1 className='lg:text-5xl  text-3xl  bg-clip-text text-transparent  bg-gradient-to-r from-blue-800 via-blue-600 to-purple-800  font-bold font-inter z-10 dark:text-shadow-lg  dark:text-transparent  dark:from-green-100 dark:via-green-500 dark:to-green-700'>
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

