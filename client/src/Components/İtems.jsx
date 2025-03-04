import React, { useContext } from 'react'
import {elements} from '../Components/itemsarray'
import { useSelector } from 'react-redux'
// import { GlobalContext } from '../Conetxt/contextapi'

function Items() {

  return (
    <  >
      {elements.map((element, index) => (
        <div className='sm:h-52 sm:w-52  w-32 h-32 group   font-bold   perspective1 group bg-transparent z-20
           flex flex-col items-center justify-center 
         dark:hover:border-purple-500 hover:shadow-none
         dark:hover:bg-transparent transition-all duration-300 '
          key={index}>
          <div className='w-full h-full relative preserve-3d rounded-lg group-hover:my-rotate-y-180
           duration-1000 dark:border border-sky-400 dark:bg-gray-900  bg-white  shadow-lg shadow-gray-400 '>
            <div className='space-y-2 absolute w-full h-full backface-hidden flex flex-col items-center justify-center  '> 
              <div className='group-hover:-translate-y-4 text-7xl sm:text-9xl transition-all'>
                {element.icon}
              </div>
              <div className='max-md:text-sm text-xl'>
                {element.name}
              </div>
            </div>
         
            <div className='w-full h-full backface-hidden absolute my-rotate-y-180  overflow-hidden
             rounded-lg flex flex-col justify-center items-center  '>
             <div className=' rounded-xl absolute  bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 dark:bg-black p-2 -top-28 delay-500 duration-500 -scale-100
              group-hover:top-5 group-hover:scale-100'>
             <h2 className='text-xl font-mono bg-clip-text dark:text-transparent bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500'>
              {element.name}
              </h2>
             </div>

             <div className='w-52 h-36 overflow-auto absolute bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500  dark:bg-black p-5 -bottom-52 tracking-tighter
              rounded-lg delay-500 duration-500 -scale-100 group-hover:-bottom-1 group-hover:scale-100'>
             <p className='text-sm '>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, molestiae. lorem200
             </p>
             </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Items