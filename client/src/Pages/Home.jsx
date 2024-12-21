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
import shotspng from '../../public/shotspng.png'
import phone from '../../public/phone.png'
import mac from '../../public/mac.png'
import ipad from '../../public/ipad.png'
function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='dark:text-white  transition-colors duration-500 w-full  relative  border-black
     flex flex-col items-center justify-center  dark:bg-[#030620] min-h-screen  md:pt-20 pb-10'
    >



      <div className=' pb-24 w-full flex justify-end   text-center items-center'>
        <div className=' h-full'>
          <h1 className='p-10  text-3xl  lg:text-5xl xl:text-7xl font-semibold font-inter 
     dark:bg-clip-text dark:text-transparent bg-gradient-to-r
      text-gray-700
      dark:from-sky-100 dark:via-sky-300 dark:to-sky-500'>
            Hızlı, Modern ve Etkileyici Web Çözümleri!
          </h1>
          <h3 className='p-5 text-lg md:text-xl  lg:text-2xl xl:text-3xl font-semibold font-inter 
          bg-clip-text text-transparent bg-gradient-to-r
               from-sky-500 via-purple-500 to-red-500
                
    '>
            İhtiyacınıza uygun, kullanıcı dostu ve yaratıcı web siteleriyle dijital dünyada fark yaratın. Size özel çözümlerle işinizi bir adım öteye taşıyoruz!
          </h3>
        </div>
        <img src={shotspng} alt="" className='max-sm:hidden w-1/2' />
      </div>

      <div className=' w-full h-[600px] flex items-start'>
        <div className=' w-2/3 relative h-[600px] flex items-center justify-center'>
          <img src={ipad} alt="" className='max-sm:hidden object-contain  absolute -right-10 w-[450px]' />
          <img src={mac} alt="" className='max-sm:hidden object-contain  absolute  w-[500px]' />
          <img src={phone} alt="" className='max-sm:hidden object-contain  absolute left-20  w-[300px]' />
        </div>

        <div className='flex-1 h-full   border-red-300 flex items-center text-start'>
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
      bg-clip-text text-transparent bg-gradient-to-r
       from-sky-500 via-purple-500 to-red-500
       dark:from-sky-100 dark:via-sky-300 dark:to-sky-500'>
          Recent Posts
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