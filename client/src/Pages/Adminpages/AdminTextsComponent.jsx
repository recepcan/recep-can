import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminTextsComponent() {
    const { currentUser } = useSelector((state) => state.user);
  const [userTexts, setUserTexts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const res = await fetch(`/api/text/getTexts?userId=${currentUser._id}`);
            const data = await res.json();
            if (res.ok) {
                setUserTexts(data.texts);
              console.log(data.texts)
            }
          } catch (error) {
            toast.error(error.message);
          }
        };
        if (currentUser.isAdmin) {
          fetchPosts();
        }
      }, [currentUser._id]);
  return (
    <div className='bg-white w-full  min-h-full flex-1 p-3 space-y-5 rounded-lg font-sans'>
    {
        userTexts && userTexts.map((text,i)=>(
           <div key={i} className='p-4 bg-gray-100 space-y-2 relative rounded-lg'>
           <div className='text-xs absolute right-2 top-2'> userId: <span className='text-sky-700 '>{currentUser._id }</span> </div>
           <div className='text-red-500 text-lg '><span className='text-black font-extrabold text-xl p-1'>Title:</span>{text.title}</div>
           <div className='pl-3 post-content text-md' ><span className='text-black font-extrabold text-lg p-1'>Content:</span>{text.content}</div>
           <div className='text-xs absolute right-2 bottom-2'> textId: <span className='text-sky-700 '>{text._id }</span> </div>

           <div>
           <Link to={`/update-text/${text._id}`}>
           <button className='p-2 rounded-lg bg-sky-600 text-white w-56'> Edit</button>
           </Link>
           </div>
           </div>
        ))
    }
    </div>
  )
}

export default AdminTextsComponent