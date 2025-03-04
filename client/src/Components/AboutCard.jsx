import React, { useEffect, useState } from 'react'
import profil from '../../public/profil.jpeg'
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTextById } from '../store/textsSlice';
import Loading from './Loading';
function AboutCard() {
  // const textId=useParams()
  const { textByIdError, textByIdLoading, textById } = useSelector(state => state.texts)
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const textId = '66b124be8e2076ecbe826a24'
  useEffect(() => {
    if (textId) {
      dispatch(fetchTextById(textId));
    }
  }, [dispatch, textId]);

 
  if (textByIdError) return <div className='min-h-screen flex items-center justify-center'>Error: {textByIdError}</div>;
  if (textByIdLoading) return <Loading />
 
    return (
      <div className='w-full p-5 md:p-10  space-y-5 md:space-x-5  border-yellow-500 
       flex flex-col lg:flex-row min-[650px]:min-h-screen items-center justify-center'>
  
      <div className=' lg:w-2/3 w-full space-y-8 border-blue-500 p-10 rounded-lg 
       shadow-gray-400 shadow-lg  hover:shadow-gray-700 transition-all dark:bg-gray-950
        flex flex-col items-center text-left justify-center'>
        {/*  <ProfilCard />    
           <FaAnglesDown className='max-[600px]:h-10 z-10 max-[600px]:w-10 max-[600px]:mt-14 max-[600px]:my-5 p-2 rounded-full hover:bg-purple-900 border-2 transition-all border-purple-900  text-purple-600 ' size={64} />  
  */}
  
        <h1 className=' text-2xl max-sm:text-lg  max-md:text-2xl max-lg:5xl  xl:text-6xl  md:tracking-wide leading-normal md:leading-tight font-extrabold  font-inter
         bg-gradient-to-b bg-clip-text text-transparent
          from-blue-600 via-blue-800 to-purple-800
          dark:bg-gradient-to-t dark:from-blue-100 dark:via-blue-300 dark:to-blue-500'>
        {textById&&textById.title}
        </h1>
  
        <p className='text-sm md:text-xl font-sans font-semibold '>{textById&&textById.content}</p>
  
        <div className='flex text-sm lg:text-xl w-full p-2   space-x-10'>
          <button className='md:p-5  p-2 w-56 rounded-lg  hover:scale-95 border-2  border-blue-200 hover:bg-gradient-to-l transition-all  duration-500 bg-gradient-to-l from-blue-200 via-blue-300 to-blue-400  '>
            Get In Touch</button>
          <button className='md:p-5  box-border p-2 w-56 rounded-lg bg-transparent border-2  border-blue-200  hover:scale-95 hover:bg-gradient-to-l transition-all  duration-500  from-blue-200 via-blue-300 to-blue-400  '>
            view my works</button>
            {/*
              currentUser&& currentUser.isAdmin &&<Link to={`/update-text/66b124be8e2076ecbe826a24`}>
              <button className='p-5 bg-sky-500 rounded-lg font-semibold text-white text-xl '>edit</button>
              </Link>
            */}
        </div>
      </div>
  
      <div className=' w-full md:w-2/3 lg:w-1/3  border-blue-500 rounded flex items-center justify-center '>
  
        <div className='bg-gradient-to-tr  from-blue-200 via-blue-300 to-blue-400  
          dark:p-2 rounded-lg   transition-all shadow-lg  shadow-gray-400 hover:shadow-gray-700'>
          <img src={profil} alt="" className='w-full md:w-2/3 lg:w-[400px] rounded-lg object-cover' />
  
        </div>
      </div>
  
    </div>
    )
  

 
}

export default AboutCard

 // const [text, setText] = useState([]);
  // useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const res = await fetch(`/api/text/getTexts?textId=66b124be8e2076ecbe826a24`);
  //         const data = await res.json();
  //         if (res.ok) {
  //           setText(data.texts[0]);
  //           console.log(data.texts[0])
  //         }
  //       } catch (error) {
  //         toast.error(error.message);
  //       }
  //     };
  //       fetchPosts();
      
  //   }, [textId]);