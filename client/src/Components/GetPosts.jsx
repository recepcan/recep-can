import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {Link} from 'react-router-dom'
function GetPosts({limit}) {
    const [recentPosts, setRecentPosts] = useState(null)
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

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch(`/api/post/getPosts?limit=${limit}`);
          const data = await res.json();
          setRecentPosts(data.posts);
        };
        fetchPosts();
      }, []);
    
  return (
    <div className='w-full flex   items-center justify-center flex-wrap p-5 gap-5'>
    {
        recentPosts ? 
        recentPosts.map((post,i)=>(
           <Link to={`/post/${post.slug}`} key={i}>
           <div className='w-96 min-h-[450px]  relative group flex flex-col items-center justify-between rounded-lg bg-white dark:bg-gray-900  shadow-lg shadow-gray-400 p-10 dark:border border-white'>
           <img className='w-72 h-72 rounded-xl object-cover group-hover:scale-105 transition-all ' src={post.image} alt={post.title} />
           <div className='text-2xl font-mono font-semibold line-clamp-3 bg-clip-text text-transparent bg-gradient-to-br from-sky-500 via-purple-500 to-red-500'>{post.title}</div>
           <div className='line-clamp-3 absolute text-sm right-4 bottom-4'>{post.category}</div>
           <div className='absolute text-xs left-4 bottom-4'>{ new Date(post.createdAt).toLocaleDateString()}</div>
          </div>
           </Link>
        )): "there is no post yet"
    }
    
    
    </div>
  )
}

export default GetPosts

// <div className='p-3 max-w-2xl mx-auto w-full post-content  line-clamp-6' dangerouslySetInnerHTML={{__html:post&&post.content}}></div>
           