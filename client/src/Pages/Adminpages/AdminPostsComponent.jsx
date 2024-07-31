import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
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
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
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
      console.log(error.message);
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
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
          <div hoverable className='shadow-md'>
            <div className='flex justify-evenly bg-gray-300 rounded-tl-lg rounded-tr-lg'>
              <div  className='p-5 w-1/6 hover:bg-gray-500 hover:text-white transition-all  flex items-center justify-center font-extrabold rounded-tl-lg '>Date updated</div>
              <div className='p-5 w-1/6 hover:bg-gray-500 hover:text-white transition-all  flex items-center justify-center font-extrabold  '>Post image</div>
              <div className='p-5 w-1/6 hover:bg-gray-500 hover:text-white transition-all  flex items-center justify-center font-extrabold  '>Post title</div>
              <div className='p-5 w-1/6 hover:bg-gray-500 hover:text-white transition-all  flex items-center justify-center font-extrabold  '>Category</div>
              <div className='p-5 w-1/6 bg-red-600 flex text-white hover:bg-red-400  transition-all items-center justify-center font-extrabold'>Delete</div>
              <div className='p-5 w-1/6 bg-sky-700 flex  text-white hover:bg-sky-400 transition-all items-center justify-center font-extrabold rounded-tr-lg '>
                <span>Edit</span>
              </div>
            </div>
            {userPosts.map((post) => (
              <div className='divide-y '>
                <div className='bg-white items-center  border-red-600 grid grid-cols-6 h-32 justify-center dark:border-gray-700 dark:bg-gray-800'>
                  <div className='  h-24  border-black flex items-center justify-center'>
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
                      className='font-medium text-gray-900 dark:text-white  overflow-hidden border border-black'
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
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no posts yet!</p>
      )}
      <div
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <div />
        <div>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this post?
            </h3>
            <div className='flex justify-center gap-4'>
              <button color='failure' onClick={handleDeletePost}>
                Yes, I'm sure
              </button>
              <button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}