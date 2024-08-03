import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaFlagCheckered } from "react-icons/fa";
import { changeLanguage, ddAdd, ddremove, toggleMenu, toggledarkMode } from '../store/headerSlice';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiMoon } from 'react-icons/gi';
import { BiSolidSun } from 'react-icons/bi';
import { motion } from 'framer-motion'
import Dropdown from './Dropdown';
import {Links} from '../store/Links.js'

function Header() {
  
    
    const {  menu, darkMode, dropdown } = useSelector(state => state.header)
    const dispatch = useDispatch()

    const setMod = () => {
        document.body.classList.toggle('dark');
        dispatch(toggledarkMode())
        

    }
    // const itemRefs = Links?.map(() => useRef(null));

    const [hoveredItem, setHoveredItem] = useState({ name: '' });

    const handleMouseEnter = (index) => {
        return () => {
            dispatch(ddAdd())
            // const name = itemRefs[index].current.textContent;
            setHoveredItem({ name });
        };
    };

    const handleMouseLeave = () => {
        // Menü dışında bir yere tıklanırsa ve bu tıklama menüyü içermiyorsa, menüyü kapat

        dispatch(ddremove())

    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}

            className='w-full  flex  items-center justify-around  h-[70px] z-50   backdrop-blur-md  bg-white/20 text-[#6666]     
            dark:bg-black/30 dark:text-white dark:border-b border-green-500  rounded-b-3xl transition-colors duration-300
        min-[600px]:fixed max-[600px]:h-[50px]'>

            <Link to="/">
                <div className='flex items-center'>
                    <h1 className='bg-gradient-to-br from-green-300 via-teal-500 to-green-900  text-white p-3 rounded-2xl text-3xl font-bold font-sans'>Recep Can's</h1><span className='font-bold text-4xl font-sans dark:text-white text-black'> Blog</span>
                </div>
            </Link>


            <div className='flex items-center'>

                <div className='flex items-center justify-around text-center space-x-5 text-sm max-[600px]:hidden transition-all  duration-300'
                >
                    {

                        Links?.map((item, index) => {
                            return (
                                <div className={`hover:text-black shadow-md shadow-gray-400 rounded-lg border-2 border-white dark:hover:text-green-500   transition-all `}
                                    key={index}
                                    // ref={itemRefs[index]}
                                    onMouseEnter={handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <NavLink id={item.id} to={item.to} >
                                        <div className="p-2 box-border h-full transition-colors duration-300 font-extrabold text-md font-mono"  >
                                            {item.name}
                                        </div>
                                    </NavLink>


                                </div>
                            )
                        }
                        )
                    }


                    {/*dropdown && <Dropdown hoveredItem={hoveredItem} />*/}

                </div>

                <div className=' flex items-center justify-center gap-5' >
                    {/*  <button onClick={() => dispatch(changeLanguage())}> <FaFlagCheckered color='red' size={20} /></button>*/}

                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 2 }}
                        className='text-black dark:text-white p-2 border-2  dark:border-green-500 shadow-lg shadow-gray-400  m-5 rounded-lg' onClick={setMod} >
                        {darkMode ?  <BiSolidSun color='orange' size={20} />: <GiMoon className='text-gray-900 ' size={20} /> }
                    </motion.button>

                    <motion.div
                        className=' min-[600px]:hidden text-black dark:text-white' onClick={() => dispatch(toggleMenu())}>
                        <AiOutlineMenu size={20} />
                    </motion.div>
                   
                     </div>


            </div>
        </motion.div>
    )
}

export default Header 