import React from 'react'
import { FaReact, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
function Footer() {
    return (
        <div className='w-full   bg-white bottom-0 shadow-inner shadow-gray-400 dark:border-t-2 p-5
         border-green-500 rounded-t-3xl text-black flex flex-col  lg:flex-row justify-center text-center items-center
        dark:text-white dark:bg-gray-900 transition-colors duration-300 dark:z-50 flex-1'>
          <div className='lg:w-1/2 w-full'>  Copyright©2024 Recep Can. All rights reserved.</div>
          
            <div className='lg:w-1/2  w-full flex-wrap flex items-center justify-center   dark:text-white text-l border-white'>
            <button className=' flex items-center justify-center h-20 text-3xl  p-5 m-3 w-[300px]  border  border-red-500 rounded-lg  hover:scale-110 transition-all '> 
            İnstagram <FaInstagram className='text-4xl text-red-400' /> 
            </button>
            <button className='flex items-center justify-center h-20 text-3xl p-5 m-3 w-[300px]  border  border-sky-500 rounded-lg  hover:scale-110 transition-all'> 
            Linked <FaLinkedin className='text-4xl text-sky-400' />
            </button>
            <button className='flex items-center justify-center h-20 text-3xl p-5 m-3 w-[300px]  border  border-purple-500 rounded-lg  hover:scale-110 transition-all'> 
            Github <FaGithub className='text-4xl text-purple-500' />
            </button>
            <button className='flex items-center justify-center h-20 text-3xl p-5 m-3 w-[300px]  border  border-green-500 rounded-lg  hover:scale-110 transition-all'> 
            Whatsapp <FaWhatsapp className='text-4xl text-green-400' />
            </button>
      
          </div>
           
        </div>
    )
}

export default Footer