import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { changeLanguage, toggleMenu } from '../store/headerSlice'
import { FaFlagCheckered } from 'react-icons/fa'
import {Links} from '../store/Links.js'
import { IoCloseSharp } from 'react-icons/io5'
function ToggleMenu() {
    const { menu, LinksEnglish, language } = useSelector(state => state.header)
    const dispatch = useDispatch()
    return (


        <div className='absolute w-full  bg-white dark:bg-[#1a202c] z-50 overflow-none
         dark:text-white transition-colors duration-300 h-screen text-white
          left-0  top-0 bottom-0 right-0 flex flex-col gap-2 items-center justify-center'>
          <div className='w-12 h-12 absolute right-5 top-5  bg-gray-200 rounded-full text-5xl text-black font-semibold' 
          onClick={()=>dispatch(toggleMenu())}>
          <IoCloseSharp />
          </div>
          {
                Links?.map((item, index) => (
                    <div key={index} className='h-16 w-96 text-slate-950  dark:text-white border-[1px]  flex mb-1 rounded-lg my-3 text-center items-center justify-center'>
                        <NavLink to={item.to} className='border-[1px] w-full h-full rounded-lg   flex text-center items-center justify-center' 
                        onClick={() => dispatch(toggleMenu())}>
                           
                                {
                                    item.name
                                }
                       

                        </NavLink>

                    </div>
                ))}
            

        </div>



    )
}

export default ToggleMenu