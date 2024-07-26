import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { changeLanguage, toggleMenu } from '../store/headerSlice'
import { FaFlagCheckered } from 'react-icons/fa'

function ToggleMenu() {
    const { menu, LinksEnglish, Links, language } = useSelector(state => state.header)
    const dispatch = useDispatch()
    return (


        <div className='absolute w-full bg-white dark:bg-[#1a202c] dark:text-white transition-colors duration-300 h-full text-white left-0 flex flex-col gap-2 items-center justify-start top-[50px]'>
            {
                (language ? Links : LinksEnglish).map((item, index) => (
                    <div key={index} className='h-16 w-96 text-slate-950  dark:text-white border-[1px]  flex mb-1 rounded-lg my-3 text-center items-center justify-center'>
                        <NavLink to={item.to} className='border-[1px] w-full h-full rounded-lg   flex text-center items-center justify-center' onClick={() => dispatch(toggleMenu())}>
                           
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