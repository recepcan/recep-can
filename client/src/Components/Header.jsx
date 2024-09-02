import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { FaFlagCheckered, FaInfoCircle, FaMoon, FaReact } from "react-icons/fa";
import { changeLanguage, ddAdd, ddremove, toggleMenu, toggleTheme } from '../store/headerSlice';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiMoon } from 'react-icons/gi';
import { BiSolidSun } from 'react-icons/bi';
import { motion } from 'framer-motion'
import Dropdown from './Dropdown';
// import {Links} from '../store/Links.js'
import { IoMoonSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaPhoneFlip } from 'react-icons/fa6';
function Header() {


    const { menu, theme, dropdown } = useSelector(state => state.header)
    const dispatch = useDispatch()
    const location = useLocation().pathname;
    const pathAfterSlash = location.split('/')[1].toLowerCase();

   useMemo( ()=>console.log(pathAfterSlash,"path"),[location])
    // const setMod = () => {
    //     document.body.classList.toggle('dark');
    //     dispatch(toggledarkMode())


    // }
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


    const Links = [
        {
            id: 'Anasayfa',
            name: 'Anasayfa',
            to: '/',
            icon: <GoHomeFill />
        },
        {
            id: 'about',
            name: 'About',
            to: '/about',
            index: true,
            icon: <FaInfoCircle />
        },
        {
            id: 'Contact',
            name: 'Contact',
            to: '/contact',
            icon: <FaPhoneFlip />

        },
        {
            id: 'admin',
            name: 'admin',
            to: '/admin',

        }

    ]


    const [rotation, setRotation] = useState(0);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setRotation(scrollTop % 120);
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}

            className='w-full  flex  items-center justify-around max-md:justify-between max-md:px-5 max-md:flex-row-reverse 
             h-[70px] z-50   backdrop-blur-md  bg-white/20 text-[#6666]     
            dark:bg-black/30 dark:text-white dark:border-b border-blue-500   transition-colors duration-300
        md:fixed max-md:h-[50px] '>

            <Link to="/">
                <div className='flex items-center'>
                    <h1 className='bg-gradient-to-br from-blue-300 via-blue-500 to-purple-500  text-white p-2 rounded-2xl text-xl md:text-3xl font-bold font-sans'>Recep Can</h1>
                </div>
            </Link>



            <div className='flex items-center'>

                <div className='flex items-center justify-around text-center space-x-5 text-sm max-md:hidden transition-all  duration-300'
                >
                    {
                        Links?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    // ref={itemRefs[index]}
                                    onMouseEnter={handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <NavLink
                                        id={item.id}
                                        to={item.to}
                                        className={({ isActive }) => isActive ? 'dark:text-sky-300  text-black' : 'hover:text-black dark:hover:text-sky-300 shadow-md shadow-gray-400 rounded-lg'}
                                    >
                                        <div className="p-2 items-center lowercase justify-between space-x-1 flex box-border h-full transition-colors duration-300 font-extrabold text-md font-mono">
                                            <h2>{item.name}</h2>
                                            <div>{item.icon}</div>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        }
                        )
                    }
                </div>

                <div className='max-md:flex-row-reverse flex items-center justify-between' >
                    <button
                        className=' pl-5    rounded-lg'
                        onClick={() => dispatch(toggleTheme())} >
                        {theme === 'dark'
                            ?
                            <BiSolidSun className='text-orange-400 text-2xl' />
                            :
                            <FaMoon className='text-purple-700 text-xl' />}
                    </button>

                    <div
                        className=' md:hidden text-black dark:text-white text-4xl' onClick={() => dispatch(toggleMenu())}>
                        <AiOutlineMenu />
                    </div>

                </div>
                <FaReact className='text-sky-600 w-8 h-8 ml-10 max-md:hidden'
                    style={{

                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: 'center' // Dönüşüm merkezini ortalıyoruz
                    }} />
            </div>


        </motion.div>
    )
}

export default Header
{/*  <button onClick={() => dispatch(changeLanguage())}> <FaFlagCheckered color='red' size={20} /></button>*/ }
{/*dropdown && <Dropdown hoveredItem={hoveredItem} />*/ }