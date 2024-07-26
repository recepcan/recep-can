import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Hizmetler from '../Components/hizmetler'



function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity:0}}
      transition={{ duration: .5 }}
      className='dark:text-white  transition-colors duration-500 w-full
     flex items-center justify-center  dark:bg-gray-900 min-h-screen'
    >
      <Hizmetler/>
    </motion.div>
  )
}

export default Home
// sayfa  geçişlerinde yaşanan sorun animamsyondan kaynaklı





       {/* <div className='w-[90%] h-[80%] grid grid-cols-3 gap-4  dark:text-white  border-sky-900'>

        



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