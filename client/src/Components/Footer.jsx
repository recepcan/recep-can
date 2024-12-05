import React from 'react'
import { FaReact, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../public/logopng.png'
function Footer() {
  return (
    <div className='w-full   bg-white bottom-0  
         border-blue-500  text-black flex flex-col  space-y-12   justify-center text-center items-center
        dark:text-white dark:bg-black transition-colors duration-300 dark:z-50 flex-1'>
      <div className=' w-full  flex flex-col items-center justify-center'>
        <Link to="/">
          
          <img className='w-72 h-52 object-contain ' src={logo} alt="" />

          
        </Link>
        
        <hr className='border rounded-xl w-[90%] border-black  dark:border-sky-400 '/>
      </div>

      <div className='w-full flex justify-around items-center'>
      <div className='  max-lg:w-full flex-wrap flex flex-col items-center justify-center 
              dark:text-white text-lg border-white'>
        <h1 className='text-2xl font-bold font-inter'>Bilgi</h1>
        <div className='dark:text-gray-400'>
          <button className=' flex items-center justify-center  text-lg p-2   w-[300px] text-gray-500 hover:underline dark:hover:text-white     rounded-lg  hover:scale-110 transition-all '>
            Site Tasarlama
          </button>

          <button className='flex items-center justify-center  text-lg p-2  w-[300px] text-gray-500 hover:underline dark:hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Site Yayınlama
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  text-gray-500 hover:underline dark:hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Alan Adı Transferi
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  text-gray-500 hover:underline dark:hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Güvenlik
          </button>
        </div>
       
      </div>

      <div className='  max-lg:w-full flex-wrap flex flex-col items-center justify-center 
          dark:text-white text-lg border-white'>
        <h1 className='text-2xl font-bold font-inter'>Hizmetler</h1>
        <div className='dark:text-gray-400 '>
          <button className=' flex items-center justify-center  text-lg p-2   w-[300px]  text-gray-500 hover:underline dark:hover:text-white    rounded-lg  hover:scale-110 transition-all '>
            Web Tasarım
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]    text-gray-500 hover:underline dark:hover:text-white  rounded-lg  hover:scale-110 transition-all'>
            Web Programlama
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  text-gray-500 hover:underline dark:hover:text-white   rounded-lg  hover:scale-110 transition-all'>
            Hosting
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  text-gray-500 hover:underline dark:hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Domain-Alan Adı
          </button>
        </div>
        
      </div>

      <div className='  max-lg:w-full flex-wrap flex flex-col items-center justify-center 
      dark:text-white text-lg border-white'>
        <h1 className='text-2xl font-bold font-inter'>Sosyal Medya</h1>
        <div className='dark:text-gray-400 '>
          <button className=' flex items-center justify-start pl-24 space-x-2   text-lg p-2 text-gray-500 hover:underline dark:hover:text-white  w-[300px]     rounded-lg  hover:scale-110 transition-all '>
             <FaInstagram className='text-xl text-red-400' /> <h1>İnstagram</h1>
          </button>
          <button className='flex items-center justify-start pl-24 space-x-2   text-lg p-2  w-[300px]  text-gray-500 hover:underline dark:hover:text-white    rounded-lg  hover:scale-110 transition-all'>
             <FaLinkedin className='text-xl text-sky-400' /><h1>Linkedin</h1>
          </button>
          <button className='flex items-center justify-start pl-24 space-x-2   text-lg p-2  w-[300px] text-gray-500 hover:underline dark:hover:text-white    rounded-lg  hover:scale-110 transition-all'>
             <FaGithub className='text-xl text-purple-500' /><h1>Github</h1>
          </button>
          <button className='flex items-center justify-start pl-24 space-x-2   text-lg p-2  w-[300px]  text-gray-500 hover:underline dark:hover:text-white    rounded-lg  hover:scale-110 transition-all'>
             <FaWhatsapp className='text-xl text-green-400' /><h1>Whatsapp</h1>
          </button>
        </div>
        
      </div>
      </div>
  
      <div className='bg-gray-100 dark:bg-gray-900 p-3 w-full '>
      <h2 className='text-xl font-inter'> Copyright©2024 Recep Can. All rights reserved.</h2>
      </div>
    </div>
  )
}

export default Footer