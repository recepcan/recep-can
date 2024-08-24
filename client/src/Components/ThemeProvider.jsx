import React from 'react'
import { useSelector } from 'react-redux'

function ThemeProvider({children}) {
    const {theme} =useSelector(state=>state.header)
  return (
    <div className={theme}>
    <div className='bg-gray-100 text-black dark:text-white dark:bg-gray-900'>
    {children}
    </div>
    </div>
  )
}

export default ThemeProvider