import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Projects() {
    const { postSlug } = useParams();
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
          try {
            
            const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message)
              return;
            }
            if (res.ok) {
              setPost(data.posts[0]);
             
            }
          } catch (error) {
          toast.error(error.message)
           
          }
        };
        fetchPost();
      }, [postSlug]);
    
      useEffect(() => {
        try {
          const fetchRecentPosts = async () => {
            const res = await fetch(`/api/post/getposts?limit=3`);
            const data = await res.json();
            if (res.ok) {
              setRecentPosts(data.posts);
            }
          };
          fetchRecentPosts();
        } catch (error) {
          toast.error(error.message);
        }
      }, []);


  return (
    <div className='min-h-screen pt-20 flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-teal-100 to-gray-100 dark:from-gray-900 dark:via-teal-950 dark:to-gray-900 '>
    
    <h1 className='text-center m-10 uppercase text-5xl font-sans font-semibold bg-clip-text bg-gradient-to-tr text-transparent from-green-500 via-teal-600 to-teal-800'>
    {post&& post.title}
    </h1>
    <div className='w-[900px] m-5 flex items-center justify-center'>
    <img src={post&&post.image} className='rounded-xl' alt="" />
    </div>

    <div className='flex justify-between p-3 border-b border-green-600 mx-auto w-full max-w-2xl text-xs'>
    <span>{post&& new Date(post.createdAt).toLocaleDateString()}</span>
    <span className='italic'> {post && (post.content.length / 1000).toFixed(0)} mins read</span>
    </div>

    <div className='p-3 max-w-2xl mx-auto w-full post-content' dangerouslySetInnerHTML={{__html:post&&post.content}}>
   
    </div>
    
    
    </div>
  )
}

export default Projects