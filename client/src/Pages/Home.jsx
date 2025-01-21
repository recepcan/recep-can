import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Hizmetler from '../Components/hizmetler'
import GetPosts from '../Components/GetPosts'
import Text from './CreateText'
import ContentCard from '../Components/ContentCard'
import Loading from '../Components/Loading'
import { fetchPost6 } from '../store/postSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { FaCaretRight } from "react-icons/fa";
import shotspng from '/shotspng.png'
import laptopkb from '/laptop-kb.png'
import phone from '/phone.png'
import mac from '/mac.png'
import ipad from '/ipad.png'
import darkmp from '/dark-mockup.png'
import lightmp from '/light-mockup.png'
import { TypeAnimation } from 'react-type-animation';

function Home() {
  const {theme} =useSelector(state=>state.header)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='dark:text-white  transition-colors duration-500 w-full  relative  border-black
     flex flex-col items-center justify-center  dark:bg-[#030620] min-h-screen  md:pt-20 pb-10'
    >



      <div className=' pb-24 w-full flex justify-end   text-start items-center'>
        <div className=' h-96 w-full flex flex-col justify-center items-center  text-center  animate-fadeIn'>
          <h1 className='p-10  text-3xl  lg:text-5xl xl:text-6xl font-semibold font-robotoSlab 
           bg-clip-text text-transparent bg-gradient-to-r
         from-sky-500 via-purple-500 to-red-500
         dark:from-sky-100 dark:via-sky-300 dark:to-sky-500'>
      <TypeAnimation
      sequence={[
        'Web site arayüz tasarımı. ', // Yazılacak metin
        1000,  // 1 saniye bekleme süresi
        'Mobil cihazlarla uyumlu site.', // Yeni metin
        1000,
        'Yönetim Paneli', // Yeni metin
        1000,
        'Site yayınlama. ', // Yeni metin
        1000,
        'Alan adı transferi.', // Yeni metin
        1000,
      ]}
     
      wrapper="div" // Metni sarmalayacak HTML etiketi
      speed={50} // Yazma hızı (milisaniye cinsinden)
      repeat={Infinity} // Sonsuz döngü
    />
          </h1>
          
        </div>
        <img src={laptopkb} alt="" className='max-sm:hidden w-1/2' />
      </div>

      <div className=' w-full h-[600px] flex items-start lg:flex-row flex-col'>
        <div className='w-full lg:w-2/3 relative h-[600px] flex items-center justify-center'>
          <img src={ipad}  alt="" className='max-xl:hidden object-contain z-10 absolute xl:-right-10 w-[450px]' />
          <img src={mac} alt="" className='max-xl:hidden object-contain z-0 absolute  w-[500px]' />
          <img src={phone} alt="" className='max-xl:hidden object-contain z-10 absolute xl:left-20  w-[300px]' />
          <img src={darkmp} alt="" 
          className={`xl:hidden ${theme=='light' && 'hidden'}  object-contain z-10 absolute xl:left-20  `} />
          <img src={lightmp} alt="" 
          className={`xl:hidden ${theme=='dark' && 'hidden'} object-contain z-10 absolute xl:left-20  `} />
        </div>

        <div className='lg:flex-1 w-full h-full   border-red-300 flex items-center text-start'>
        <h1 className='p-10  text-3xl  lg:text-5xl xl:text-7xl font-semibold font-inter 
        bg-clip-text text-transparent bg-gradient-to-r
         from-sky-500 via-purple-500 to-red-500
         dark:from-sky-100 dark:via-sky-300 dark:to-sky-500'>
              Bütün cihazlarla uyumlu arayüz tasarımı sizinle...
             </h1>
        </div>
      </div>
      {/* recent posts*/}

      <div className='  dark:bg-gradient-to-t  text-center
       '>
        <h1 className='p-10 text-5xl font-semibold font-inter 
      
       from-sky-500 via-purple-500 to-red-500
       dark:from-sky-100 dark:via-sky-300 dark:to-sky-500'>
          Recent Projects
        </h1>
        <GetPosts limit={3} />
      </div>
      <Link
        className='p-3 w-[354px] border-2 bg-blue-500 dark:bg-green-600 group hover:scale-110 transition-all flex items-center justify-center  rounded-lg text-white text-xl font-inter'
        to='./projects'>
        Show All
        <span className='text-xl text-white'>
          <FaCaretRight />
        </span>
      </Link>
    </motion.div>
  )
}

export default Home
// sayfa  geçişlerinde yaşanan sorun animamsyondan kaynaklı





{/*  <Text/> <div className='w-[90%] h-[80%] grid grid-cols-3 gap-4  dark:text-white  border-sky-900'>

        



          <div className='  relative rounded-lg shadow-lg  shadow-gray-400 row-span-2 '>
            
          </div>
          <div className=' bg-transparent flex text-center items-center dark:border border-red-400 justify-center dark:text-white  shadow-gray-400 rounded-md row-span-2 col-span-2 text-3xl  font-bold '>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </div>


          
          <div className=' bg-transparent    shadow-gray-400 rounded-lg row-span-2 col-span-2 flex text-center items-center justify-center  text-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe cumque corrupti ex hic iusto laudantium iste voluptate alias quos quidem odio molestiae mollitia dolorem rerum, porro non quia minima dolor facilis fugiat veniam dolorum tenetur. Officia assumenda modi deserunt, aspernatur voluptatibus veniam fugit, similique temporibus reprehenderit itaque soluta. Quidem?

          </div>
          <div className='shadow-lg   shadow-gray-400  relative rounded-lg row-span-2'>
          
        </div>

         

  </div>*/}