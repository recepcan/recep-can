import React from 'react'
import { FaReact, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='w-full   bg-white bottom-0 shadow-inner shadow-gray-400 dark:border-t-2 p-5
         border-blue-500 rounded-t-3xl text-black flex flex-col  max-lg:space-y-8 lg:flex-row justify-center text-center items-center
        dark:text-white dark:bg-black transition-colors duration-300 dark:z-50 flex-1'>
      <div className='lg:w-1/3 w-full space-y-5'>
        <Link to="/">
          <div className='flex items-center justify-center'>
            <h1 className='bg-gradient-to-br from-blue-300 via-blue-500 to-purple-500  text-white p-2 rounded-2xl text-xl md:text-3xl font-bold font-sans'>
              Recep Can
            </h1>
          </div>
        </Link>
        <h2> Copyright©2024 Recep Can. All rights reserved.</h2>
        <hr className='lg:hidden  border-black  dark:border-sky-400 '/>
      </div>

      <div className='  max-lg:w-full flex-wrap flex flex-col items-center justify-center 
              dark:text-white text-lg border-white'>
        <h1 className='text-2xl font-bold font-inter'>Bilgi</h1>
        <div className='dark:text-gray-400'>
          <button className=' flex items-center justify-center  text-lg p-2   w-[300px] hover:text-white     rounded-lg  hover:scale-110 transition-all '>
            Site Tasarlama
          </button>

          <button className='flex items-center justify-center  text-lg p-2  w-[300px] hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Site Yayınlama
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Alan Adı Transferi
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Güvenlik
          </button>
        </div>
       
      </div>

      <div className='  max-lg:w-full flex-wrap flex flex-col items-center justify-center 
          dark:text-white text-lg border-white'>
        <h1 className='text-2xl font-bold font-inter'>Hizmetler</h1>
        <div className='dark:text-gray-400'>
          <button className=' flex items-center justify-center  text-lg p-2   w-[300px]  hover:text-white    rounded-lg  hover:scale-110 transition-all '>
            Web Tasarım
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]    hover:text-white  rounded-lg  hover:scale-110 transition-all'>
            Web Programlama
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  hover:text-white   rounded-lg  hover:scale-110 transition-all'>
            Hosting
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Domain-Alan Adı
          </button>
        </div>
        
      </div>

      <div className='  max-lg:w-full flex-wrap flex flex-col items-center justify-center 
      dark:text-white text-lg border-white'>
        <h1 className='text-2xl font-bold font-inter'>Sosyal Medya</h1>
        <div className='dark:text-gray-400'>
          <button className=' flex items-center justify-center  text-lg p-2 hover:text-white  w-[300px]     rounded-lg  hover:scale-110 transition-all '>
            İnstagram <FaInstagram className='text-xl text-red-400' />
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Linked <FaLinkedin className='text-xl text-sky-400' />
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px] hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Github <FaGithub className='text-xl text-purple-500' />
          </button>
          <button className='flex items-center justify-center  text-lg p-2  w-[300px]  hover:text-white    rounded-lg  hover:scale-110 transition-all'>
            Whatsapp <FaWhatsapp className='text-xl text-green-400' />
          </button>
        </div>
        
      </div>

    </div>
  )
}

export default Footer