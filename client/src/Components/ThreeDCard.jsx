import React, { useState } from 'react'
import profil from '../../public/profil.jpeg'
function ThreeDCard() {
    const [isFlipped, setIsFlipped] = useState(true);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className=" w-[400px] h-[400px] bg-transparent perspective1 group ">
            <div className='w-full h-full relative preserve-3d  group-hover:my-rotate-y-180 duration-1000 '>

                <div className='absolute w-full flex justify-start h-full backface-hidden  border-red-500 '>
                    <img src={profil} className=' rounded-lg  object-center' />
                </div>

                <div className='w-full h-full backface-hidden absolute my-rotate-y-180 bg-transparent  overflow-hidden rounded-lg flex flex-col justify-center items-center '>
                   <div className='w-1/2 rounded-xl absolute bg-purple-900   p-2 -top-28 delay-500 duration-500 -scale-100 group-hover:top-3 group-hover:scale-125 '>
                   <h1 className='text-white font-mono font-bold text-2xl'>Recep Can </h1>
                   <h3 className='text-white font-thin text-sm'>Web Developer</h3> 
                   </div>
                    <div className='absolute p-2 -top-96 w-[350px]  delay-500 duration-500 group-hover:top-24 bg-purple-900  rounded-lg z-10'>
                    <p className='font-thin  text-white '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dicta
                        impedit facere culpa nobis? Voluptatum ipsum harum odit adipisci deserunt esse
                        maiores velit assumenda, animi, reiciendis dicta molestiae ad sapiente,
                        cum tenetur voluptate iusto. Praesentium iusto magni nobis.
                    </p>
                    </div>
                    <div className='p-2 w-full absolute -bottom-20 delay-500 rounded-lg duration-500 -scale-100 group-hover:bottom-0 group-hover:scale-125'>
                    <button className='bg-purple-900   rounded-lg px-5 py-1 text-white  
                     '>
                    Buy
                    </button>
                </div>
                    </div>
            </div>
        </div>
    );
}

export default ThreeDCard