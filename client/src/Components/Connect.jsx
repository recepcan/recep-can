import React from 'react'
import { FaReact, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

function Connect() {
  return (
    <div className='w-full min-h-[800px]  flex flex-col items-center bg-gray-100 dark:bg-gray-900 '>
      <h1 className='text-7xl font-sans tracking-wide leading-tight from-[#0c0b10]  via-[#3aafa9] to-sky-300 font-extrabold dark:text-shadow-lg bg-clip-text text-transparent bg-gradient-to-br dark:from-green-100 dark:via-green-500 dark:to-green-700'>
        Let's Connect</h1>
      <hr className='w-[90%] my-10 dark:border-green-500 border-black' />
      <div className=' w-[90%] h-full flex space-x-2'>

        <div className='w-1/2 h-full p-5 flex flex-col space-y-10 rounded-xl text-start   border-gray-400'>

         
            <h1 className='text-6xl  tracking-wide leading-tight font-extrabold font-sans
           bg-gradient-to-br from-[#0c0b10]  via-[#3aafa9] to-[#3aafa99e] bg-clip-text text-transparent dark:bg-gradient-to-br dark:from-green-100 dark:via-green-500 dark:to-green-900'>
             GET IN TOUCH <span className='float-right '> WITH US</span>
             </h1>

            <p className='text-lg font-mono font-semibold'>
            Feel free to contact us for collaboration opportunities or freelance work. We're open to exciting projects and look forward to hearing from you!Feel free to contact us for collaboration opportunities or freelance work. We're open to exciting projects and look forward to hearing from you!
            I'm always open to new opportunities and collaborations. If you have a project in mind or want to discuss how I can contribute to your team, please don't hesitate to reach out.
            </p>

        </div>


        <div className='w-1/2 h-full  p-5 rounded-lg flex items-center justify-center flex-col shadow-lg shadow-gray-400 hover:shadow-gray-600 transition-all dark:border border-green-500 bg-gray-100 dark:bg-[#17252a] '>

          
            <h1 className='text-5xl bg-clip-text dark:text-transparent bg-gradient-to-br from-green-100 via-green-500 to-green-700'>
            Send me an email
            </h1>
            <input type="text" placeholder='Name&Surname' className='w-full p-5 m-3 rounded-lg text-white font-bold bg-gray-300 dark:bg-green-100' />

            <input type="text" placeholder='E-mail' className='w-full p-5 m-3 rounded-lg text-white font-bold bg-gray-300 dark:bg-green-100' />
            {/*     <div className="relative p-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-md">
      <input
        type="text"
        className="w-full p-2 border-none rounded-md bg-black focus:outline-none"
        placeholder="Gradient border input"/>
      
    </div>*/}
            <textarea name="" placeholder='Your Message' id="" className='w-full p-5 m-3 rounded-lg text-white font-bold bg-gray-300 dark:bg-green-100'>
            </textarea>
            <button className='p-5 text-xl w-1/2 rounded-lg bg-gradient-to-b hover:scale-95 hover:bg-gradient-to-l transition-all  duration-500 from-green-100 via-teal-500-500 to-green-900 '>
              Send</button>
          {/*  */}

        </div>
        
      </div>
     
    </div>
  )
}

export default Connect