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

  if (textByIdLoading) return <Loading />
  if (textByIdError) return <div className='min-h-screen flex items-center justify-center'>Error: {textByIdError}</div>;

  return (
    <div className='w-full px-10 pt-0  border-black  flex min-[650px]:h-screen items-center justify-center'>

    <div className=' w-2/3 p-10 rounded-lg shadow-md shadow-gray-400 bg-white  hover:shadow-gray-600 transition-all dark:bg-[#17252a]   flex flex-col items-start text-left justify-center'>
      {/*  <ProfilCard />    
         <FaAnglesDown className='max-[600px]:h-10 z-10 max-[600px]:w-10 max-[600px]:mt-14 max-[600px]:my-5 p-2 rounded-full hover:bg-purple-900 border-2 transition-all border-purple-900  text-purple-600 ' size={64} />  
*/}

      <h1 className='text-6xl  tracking-wide leading-tight font-extrabold  bg-gradient-to-b from-blue-600 via-blue-800 to-purple-800  bg-clip-text text-transparent dark:bg-gradient-to-br dark:from-green-100 dark:via-green-500 dark:to-green-900'>
      {textById&&textById.title}
      </h1>

      <p className=' text-lg font-mono font-semibold'>{textById&&textById.content}</p>

      <div className='flex m-10 w-full h-20  space-x-10'>
        <button className='p-5 text-xl w-56 rounded-lg  hover:scale-95 hover:bg-gradient-to-l transition-all  duration-500 bg-gradient-to-l from-blue-200 via-blue-300 to-blue-400  '>
          Get In Touch</button>
        <button className='p-5 text-xl w-56 rounded-lg bg-transparent border-2 border-sky-500 hover:border-none hover:scale-95 hover:bg-gradient-to-l transition-all  duration-500  from-blue-200 via-blue-300 to-blue-400  '>
          view my works</button>
          {/*
            currentUser&& currentUser.isAdmin &&<Link to={`/update-text/66b124be8e2076ecbe826a24`}>
            <button className='p-5 bg-sky-500 rounded-lg font-semibold text-white text-xl '>edit</button>
            </Link>
          */}
      </div>
    </div>

    <div className='w-1/3  rounded flex items-center justify-center relative'>

      <div className='bg-gradient-to-tr  from-blue-200 via-blue-300 to-blue-400  top-24  dark:p-2 rounded-lg shadow-lg hover:shadow-gray-700 transition-all shadow-gray-400'>
        <img src={profil} alt="" className='w-[400px] rounded-lg object-cover' />

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