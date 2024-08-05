import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function AdminTextsComponent() {
    const { currentUser } = useSelector((state) => state.user);
  const [userTexts, setUserTexts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const res = await fetch(`/api/text/getTexts`);
            const data = await res.json();
            if (res.ok) {
                setUserTexts(data.texts);
              
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
    <div>
    {
        userTexts && userTexts.map((text,i)=>(
           <div key={i}>
           <div className='text-red-500 text-xl '>{text.title}</div>
           <div className='p-3 max-w-2xl mx-auto w-full post-content' >{text.content}</div>
           </div>
        ))
    }
    </div>
  )
}

export default AdminTextsComponent