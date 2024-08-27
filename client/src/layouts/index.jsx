import React from 'react'
import { Outlet } from 'react-router-dom'

function Mainlayout() {
    return (
        <div className="w-[1265px] mx-auto flex">
           

            <main className='flex-1 flex gap-[30px]'>
                <main className='flex-1 max-w-600 border-x border-[#2f3336]'>
                    <Outlet />
                </main>
             
            </main>
        </div>
    )
}

export default Mainlayout
