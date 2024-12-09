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
            <Link to={`/post/${post.slug}`} key={i}>
              <div className='w-[350px]    min-h-[500px] group relative transition-all hover:scale-105 
              flex flex-col items-center space-y-5 rounded-lg
               bg-gray-300  dark:bg-gray-900 shadow-gray-400 dark:border border-white'>
                <img className='w-full h-80   group-hover:rounded-lg duration-700 rounded-t-lg object-cover  transition-all border-b ' src={post.image} alt={post.title} />
                <div className=' rounded-lg p-2 text-2xl font-mono font-semibold line-clamp-1 px-5 text-white '>
                  {post.title}
                </div>

                <Link to={`/post/${post.slug}`}
                className='w-[90%] p-2 bg-blue-600 text-xl text-white font-inter rounded-lg'>
                wiev
                </Link>
                
                <div className='line-clamp-3 absolute text-xs right-4 bottom-4'>
                  {post.category}
                </div>
                <div className='absolute text-xs left-4 bottom-4'>
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </Link>
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