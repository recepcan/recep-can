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

function Header() {
    const { Links, LinksEnglish, language, menu, darkMode, dropdown } = useSelector(state => state.header)
    const dispatch = useDispatch()

    const setMod = () => {
        document.body.classList.toggle('dark');
        dispatch(toggledarkMode())
        console.log(document.body)

    }
    const itemRefs = Links.map(() => useRef(null));

    const [hoveredItem, setHoveredItem] = useState({ name: '' });

    const handleMouseEnter = (index) => {
        return () => {
            dispatch(ddAdd())
            const name = itemRefs[index].current.textContent;
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

            className='w-full  flex  items-center justify-around  h-[70px] z-50   backdrop-blur-md  bg-white/30  text-[#6666]     
            dark:bg-black/30 dark:text-white dark:border-b border-green-500  rounded-b-3xl transition-colors duration-300
        min-[600px]:fixed max-[600px]:h-[50px]'>

            <Link to="/">
                <div className='text-purple-900   font-serif   flex text-center tracking-wider  items-center justify-center text-3xl rounded-md font-bold p-2 max-[600px]:h-[30px] max-[600px]:text-base
                 dark:text-white transition-colors duration-300 ' >
                     RECEP <span className='dark:text-[#3aafa9] p-2'> CAN</span>
                </div>
            </Link>


            <div className='flex items-center'>

                <div className='flex items-center justify-around text-center gap-3 text-sm max-[600px]:hidden transition-all  duration-300'
                >
                    {

                        (language ? Links : LinksEnglish).map((x, index) => {
                            return (
                                <div className={`hover:text-black border-gray-950 dark:hover:text-purple-500   transition-colors duration-300`}
                                    key={index}
                                    ref={itemRefs[index]}
                                    onMouseEnter={handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <NavLink id={x.id} to={x.to} >
                                        <div className="p-2 box-border h-full transition-colors duration-300"  >
                                            {x.name}
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
                        className='text-black dark:text-white' onClick={setMod} >{darkMode ? <BiSolidSun color='orange' size={20} /> : <GiMoon className='text-purple-900 ' size={20} />}
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