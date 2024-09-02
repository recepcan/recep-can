import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { changeLanguage, toggleMenu } from '../store/headerSlice'
import { FaFlagCheckered } from 'react-icons/fa'
import {Links} from '../store/Links.js'
import { IoCloseSharp } from 'react-icons/io5'
function ToggleMenu() {
    const { menu, language } = useSelector(state => state.header)
    const dispatch = useDispatch()
    return (


        <div className='absolute w-full  bg-white dark:bg-[#1a202c] z-50 overflow-none p-5
         dark:text-white transition-colors duration-300 min-h-screen text-white
          left-0  top-0 bottom-0 right-0 flex flex-col gap-2 items-center justify-center'>
          <div className='w-10 h-10 absolute right-5 top-5  bg-black  rounded-full text-4xl text-white font-semibold
           flex items-center justify-center' 
          onClick={()=>dispatch(toggleMenu())}>
          <IoCloseSharp />
          </div>
          {
                Links?.map((item, index) => (
                   
                        <NavLink key={index} to={item.to} className=' text-slate-950  dark:text-white p-5 border w-full  rounded-lg  
                         flex text-center items-center justify-center' 
                        onClick={() => dispatch(toggleMenu())}>
                           
                                {
                                    item.name
                                }
                       

                        </NavLink>

                   
                ))}
            

        </div>



    )
}

export default ToggleMenu