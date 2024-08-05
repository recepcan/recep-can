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
import Text from './Text'
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
    dark:bg-gray-900 dark:text-white dark:z-10 py-10 border-purple-400 '>
      {
        !menu &&
        <div className='flex  flex-col border-red-400 '>
          <AboutCard />
          

          {/*<Hizmetler />  <Text/> */}

          <div className='w-full flex flex-col items-center space-y-10  h-[700px] bg-gradient-to-t from-gray-100 via-teal-100 to-gray-100 dark:from-gray-900 dark:via-teal-900 dark:to-gray-900'>
            <h1 className='text-5xl  bg-clip-text text-transparent  from-[#0c0b10]  via-[#3aafa9] to-sky-300 bg-gradient-to-tr font-bold font-sans z-10 dark:text-shadow-lg  dark:text-transparent  dark:from-green-100 dark:via-green-500 dark:to-green-700'>
              Technologies I Am Using
            </h1>

            <hr className='w-[90%]  border-green-500' />

            <div className='flex w-full flex-wrap  justify-center items-center gap-3 '>

              <Items />

            </div>

          </div>

        </div>
      }

    </motion.div>
  )
}

export default About

