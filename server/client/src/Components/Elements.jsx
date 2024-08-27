import React from 'react'
import { elements } from '../Components/array'

function Elements() {
  return (<>
    {elements.map((element, index) => (

        <button className='dark:text-white border-b rounded-b-none rounded-xl hover:bg-[#83d3cf] cursor-pointer transition-all border-green-700 h-full flex justify-center items-center' key={index}>

          <div className=" flex   ">
            <div className='flex p-1 space-x-2 items-center justify-center'>
              <div className='text-2xl'> {element.icon}</div>
              <div className='text-md'>
                {element.name}
              </div>
            </div>
          </div>

        </button>

      ))}
      </>
  )
}

export default Elements