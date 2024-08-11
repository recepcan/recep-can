import React, { useEffect, useState } from 'react'
import Elements from './Elements'
import { FaReact ,FaEdit} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '../store/modalSlice';
function Hizmetler() {
    
    const {currentUser}=useSelector(state=>state.user)

    const dispatch=useDispatch()

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
    
    <div className='dark:bg-gray-900  w-full h-[750px] flex  items-center justify-center  p-3 overflow-hidden'>
    
    <div className='w-[90%] h-full flex border-white'>
      <div className='w-1/2 h-full space-y-5 flex flex-col justify-center text-start border-white  '>
        
          <h1 
             className='dark:text-shadow-lg text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 via-purple-500 to-red-500 dark:from-green-100 dark:via-green-500 dark:to-green-700'>
          What I Do
          </h1>
          <h2 className='dark:text-white font-bold text-xl leading-10 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-red-500'>I build exceptional web experiences with Next.js, Tailwind CSS, FireBase, and React, transforming ideas into reality</h2>

        
        <div className='w-[630px] h-[400px] p-2 box-border relative  shadow-xl shadow-gray-400 hover:shadow-gray-600 dark:border border-green-500 transition-all dark:bg-black bg-[#def2f1]  rounded-xl dark:text-white'>

          <div className='w-[610px] h-[70px] dark:bg-black bg-[#def2f1] p-2 mb-2 flex  justify-evenly items-center overflow-y-auto custom-scrollbar rounded-lg '>

              <Elements/>
           
          </div>

          <div className='h-60 w-full p-8 text-lg  scrollbar-hide overflow-auto custom-scrollbar tracking-wider leading-6'>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quidem nihil saepe corrupti eaque, iste quos numquam? Laborum cumque in illo eum ullam similique accusantium obcaecati aspernatur, quia commodi eos repudiandae voluptate quae ipsum adipisci doloremque, aliquam enim aliquid ad eveniet qui rem? Itaque ipsum dolores, officia voluptatem vero voluptas at provident eveniet, accusamus impedit, ratione quae similique inventore. Inventore recusandae veritatis ipsum asperiores doloribus quam. Veritatis, voluptatum, magni earum sed autem, voluptatibus odio accusantium non totam fugit distinctio dicta ducimus? Repellat dolorum numquam consequatur sunt culpa autem deleniti assumenda esse. Culpa laboriosam incidunt totam animi assumenda repellendus repudiandae sit vel omnis consectetur, eaque ducimus, repellat eligendi voluptatibus! Vel ex quasi sit saepe nihil dolore beatae, exercitationem hic soluta, perspiciatis error necessitatibus consequatur eius magni, tempora accusamus dicta praesentium in. Doloribus iusto recusandae voluptatibus aut ipsa repellendus ducimus nihil mollitia sed, eius fugit, itaque molestias nam perferendis veniam rerum nesciunt. Facilis reprehenderit obcaecati labore beatae natus alias dolorem assumenda minima molestias corporis repudiandae doloremque cum voluptas saepe magni, ipsa nulla nam fuga porro. Quidem autem praesentium quos officiis corrupti earum, cumque provident debitis sequi odit numquam ipsam reprehenderit ducimus dolor, voluptatum unde. Cumque totam cupiditate modi eveniet incidunt praesentium dolorum.
            </p>
          </div>
          
          {/*currentUser && currentUser.isAdmin && 
            ( <button className='absolute -top-5 -right-5 p-2 bg-sky-500 w-10 h-10 rounded-full' onClick={()=>dispatch(modalAction())}> <FaEdit /> </button>)
          */}
        
          </div>
      </div>


      <div className='w-1/2 h-full flex items-center justify-center text-center   border-white      '

      >
        <FaReact className='text-sky-600 w-[512px] h-[512px] p-10 m-10  '
          style={{

            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'center' // Dönüşüm merkezini ortalıyoruz
          }} />
      </div>
    </div>

  </div>

  )
}

export default Hizmetler