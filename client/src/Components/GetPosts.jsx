import React, { useEffect, useState,useMemo } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { fetchPost6 } from '../store/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';


function GetPosts({ limit }) {
  const [recentPosts, setRecentPosts] = useState(null)
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.posts);



  useEffect(() => {
    dispatch(fetchPost6(limit))
    console.log("postlar çekildi")
   
  }, [dispatch,limit]);
  
  if (data.length === 0) {
    return <div>No posts available</div>;
  }

  
  if (error) { 
    return  toast.error(error);
  }
  if (loading) {
    return <Loading />
  }
  

  
  
    
    
   
  
  
  return (
    <div className='w-full  border-blue-500 grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center  p-5 gap-5'>
      {
        data.posts ?
          data?.posts?.map((post, i) => (
            <div  key={i}>
              <div className='w-[325px] min-[400px]:w-[350px] p-5   min-h-[400px] group relative transition-all hover:scale-105 
              flex flex-col items-center space-y-3 rounded-lg
               bg-white shadow-sm dark:shadow-none dark:bg-gray-900 shadow-gray-400 dark:border border-white'>
               
                <img className=' h-52   group-hover:rounded-lg  duration-700 rounded-3xl object-cover  transition-all  '
                 src={post.image} alt={post.title} />
                <h1 className=' rounded-lg w-full   text-2xl font-mono font-semibold line-clamp-1    '>
                  {post.title}
                </h1>

               <div className='flex space-x-5 w-full p-3'>
               <Link to={`/post/${post.slug}`}
               className='w-[90%] p-2 bg-blue-600 text-xl text-white font-inter rounded-lg'>
               wiev
               </Link>
               <Link to={`${post.demo}`} target="_blank" rel="noopener noreferrer"
               className='w-[90%] p-2 bg-green-600 text-xl text-white font-inter rounded-lg'>
               live demo 
               </Link>
               </div>
                
                <div className='line-clamp-3 absolute text-xs right-2 bottom-2'>
                  {post.category}
                </div>
                <div className='absolute text-xs left-2 bottom-2'>
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          )) : "there is no post yet"
      }


    </div>
  )
}

export default GetPosts

// <div className='p-3 max-w-2xl mx-auto w-full post-content  line-clamp-6' dangerouslySetInnerHTML={{__html:post&&post.content}}></div>

  // useEffect(() => {
  //   try {
  //     const fetchRecentPosts= async ()=>{
  //         const res = await fetch(`/api/post/getPosts?limit=3`)
  //         const data=res.json()
  //         if(!res.ok){
  //             toast.error(data.message)
  //         }
  //         if(res.ok){
  //             setRecentPosts(data.posts)
  //         }

  //     }
  //     fetchRecentPosts()
  //   } catch (error) {
  //     toast.error(error.message)
  //   }


  // }, [])


   // const fetchPosts = async () => {
    //   const res = await fetch(`/api/post/getPosts?limit=${limit}`);
    //   const data = await res.json();
    //   setRecentPosts(data.posts);
    // };
    // fetchPosts();