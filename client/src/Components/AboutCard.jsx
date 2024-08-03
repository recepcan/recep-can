import React from 'react'
import profil from '../../public/profil.jpeg'
function AboutCard() {
  return (
    <div className='w-full px-10 pt-0  border-black  flex min-[650px]:h-screen items-center justify-center'>

    <div className=' w-2/3 p-10 rounded-lg shadow-md shadow-gray-400 bg-white  hover:shadow-gray-600 transition-all dark:bg-[#17252a]   flex flex-col items-start text-left justify-center'>
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
  )
}

export default AboutCard