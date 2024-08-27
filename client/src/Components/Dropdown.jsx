import React from 'react'
import { useSelector } from 'react-redux'

function Dropdown({hoveredItem}) {
  const { dropdown, dropdownItems ,Links} = useSelector(state => state.header)
  console.log(hoveredItem)
  return (
    <div className={dropdown ? 'absolute top-[50px] left-[820px]  bg-gray-100  shadow-gray-400 shadow-lg  rounded-xl text-white p-3  w-96 ' : 'hidden  '}>
{
  dropdownItems.filter(item=>item.category==hoveredItem.name).map((item,index)=>(
    <ul key={index}  className='text-black font-bold p-5'>
    <li className='p-2 bg-gray-200 m-2 rounded-md shadow-md shadow-gray-300'>
      {item.text}
    </li>
  </ul>
  ))
}
          

    </div>
  )
}

export default Dropdown