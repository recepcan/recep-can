import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Projects() {
  const { postSlug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
const {loading}=useSelector(state=>state.posts)
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
    <div className='min-h-screen p-10 md:pt-20 flex flex-col lg:flex-row items-start lg:justify-center lg:space-x-5 
     '>


      <div className='lg:w-[900px] relative lg:z-50   w-full  lg:sticky lg:top-20  flex flex-col items-start justify-start'>
        {
          post && post.image ? <img src={post && post.image} 
          className='rounded-xl transition-all duration-300 border ease-in-out transform lg:hover:scale-[170%]  lg:hover:mx-52 lg:hover:my-32 lg:hover:border backdrop-blur-md ' alt="" /> :
            <div className='w-full bg-gradient-to-r bg-transparent from-gray-300 to-gray-500  h-96 m-5 rounded-xl'></div>
        }


        <div className='w-full flex space-x-4 p-2'>
          <Link to={`${post?.demo}`} target="_blank" rel="noopener noreferrer"
            className='p-2 dark:border-2 w-full sm:text-xl flex items-center justify-center hover:scale-105 transition-all
 bg-transparent bg-gradient-to-r from-green-400 to-green-700  text-white rounded-lg font-bold font-inter'>
            wiev in live
          </Link>
          <Link to={`${post?.source}`}  target="_blank" rel="noopener noreferrer"
            className='p-2 dark:border-2 w-full sm:text-xl flex items-center justify-center space-x-3 hover:scale-105 transition-all
 bg-transparent bg-gradient-to-r from-purple-400 to-purple-700  text-white rounded-lg
  font-bold font-inter'>
            <span>source code </span>
            <FaGithub className="text-3xl text-white" />
          </Link>
        </div>
      </div>

      <div className=' w-full'>
        {
          post && post.title ?
            <h1 className='text-center  uppercase text-3xl lg:text-5xl p-10
        font-inter font-semibold bg-clip-text bg-gradient-to-tr text-transparent dark:from-blue-100 dark:via-blue-300 dark:to-blue-500 from-blue-600 via-purple-600 to-red-600'>
              {post && post.title}
            </h1> :
            <div className='w-full bg-gradient-to-r bg-transparent from-gray-300 to-gray-500  h-10 m-5 rounded-xl'></div>
        }

        
        {
          post && post.content ?
          <div className=' max-w-2xl text-justify text-xl font-bold font-inter tracking-wider leading-10 mx-auto w-full post-content' dangerouslySetInnerHTML={{ __html: post && post.content }}>

          </div> :
            <div className='w-full bg-gradient-to-r bg-transparent from-gray-300 to-gray-500  h-96 m-5  rounded-xl'></div>
        }
        

        <div className='w-full flex space-x-3 md:space-x-20 items-center justify-between p-3 border-b-2 border-blue-600  dark:border-white   text-xs'>
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>

          <span className='italic'> {post && (post.content.length / 1000).toFixed(0)} mins read </span>
        </div>
      </div>



    </div>
  )
}

export default Projects