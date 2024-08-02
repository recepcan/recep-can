import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
// import { set } from 'mongoose';

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState('');
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 6) {
            setShowMore(false);
          }
        }
      } catch (error) {
       toast.error(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

 

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
console.log(showModal,"modal")
  return (
    <div className=' md:mx-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <div className='flex flex-col items-center justify-center'>
          <div  className='shadow-md '>
            <div className='flex justify-evenly bg-gray-300 rounded-tl-lg rounded-tr-lg'>
              <div  className='p-5 w-1/6 hover:bg-gray-500 hover:text-white transition-all  flex items-center justify-center font-extrabold rounded-tl-lg '>Date updated</div>
              <div className='p-5 w-1/6 hover:bg-gray-500 hover:text-white transition-all  flex items-center justify-center font-extrabold  '>Post image</div>
              <div className='p-5 w-1/6 hover:bg-gray-500 hover:text-white transition-all  flex items-center justify-center font-extrabold  '>Post title</div>
              <div className='p-5 w-1/6 hover:bg-gray-500 hover:text-white transition-all  flex items-center justify-center font-extrabold  '>Category</div>
              <div className='p-5 w-1/6 bg-red-700 flex text-white hover:bg-red-500  transition-all items-center justify-center font-extrabold'>Delete</div>
              <div className='p-5 w-1/6 bg-sky-700 flex  text-white hover:bg-sky-400 transition-all items-center justify-center font-extrabold rounded-tr-lg '>
                <span>Edit</span>
              </div>
            </div>
            {userPosts.map((post) => (
              <div className='divide-y '>
                <div className='bg-white items-center border-b  border-gray-300 grid grid-cols-6 h-32 justify-center dark:border-gray-700 dark:bg-gray-800'>
                  <div className=' h-24  border-black flex items-center justify-center'>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </div>
                  <div className=' h-24   border-black flex items-center justify-center'>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='w-20 h-24   border-black object-cover bg-gray-500'
                      />
                    </Link>
                  </div>
                  <div className='h-24   border-black flex items-center justify-center'>
                    <Link
                      className='font-medium text-gray-900 dark:text-white  overflow-hidden  border-black'
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </div>
                  <div className='h-24   border-black flex items-center justify-center'>{post.category}</div>
                  <div className='h-24   border-black flex items-center justify-center'>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </div>
                  <div className='h-24   border-black flex items-center justify-center'>
                    <Link
                      className='text-teal-500 hover:underline'
                      to={`/update-post/${post._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-1/3 text-white font-semibold mt-2
              font-mono self-center text-2xl p-4 rounded-xl bg-cyan-700 '
            >
              Show more
            </button>
          )}
        </div>
      ) : (
        <p>You have no posts yet!</p>
      )}
      { showModal &&
      <div
        className='flex items-center justify-center  rounded-lg p-2 absolute min-h-svh left-0 right-0 bottom-0 top-0 z-50  bg-black/50'
     
      >
      
        <div />
        <div className='bg-gray-200 p-20 relative rounded-lg  border-2 border-sky-500'>
        <button className='text-red-500 text-3xl absolute right-2 top-2'   onClick={()=>setShowModal(false)}> <AiFillCloseCircle/></button>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this post?
            </h3>
            <div className='flex justify-center gap-4'>
              <button className='bg-red-400 rounded-lg p-2 ' onClick={handleDeletePost}>
                Yes, I'm sure
              </button>
              <button className='bg-sky-400 rounded-lg p-2 ' onClick={() => setShowModal(false)}>
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
}