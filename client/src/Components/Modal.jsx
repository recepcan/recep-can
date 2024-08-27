import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { modalAction } from '../store/modalSlice'

export default function Modal() {
    const dispatch=useDispatch()
  return (
    <div className='w-full min-h-svh bg-black/30 p-2 absolute z-50 top-0 left-0 right-0 bottom-0 '>
      <div className='w-1/2 h-1/2 bg-gray-50 rounded-lg absolute top-[50%] left-[50%] -translate-y-[50%] z-10 -translate-x-[50%]'>
      modal
      <AiFillCloseCircle onClick={()=>dispatch(modalAction())} className='absolute top-2 right-2 text-red-500 h-10 w-10' />
      </div>
    </div>
  )
}
