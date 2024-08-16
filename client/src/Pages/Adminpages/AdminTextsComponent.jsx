// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { fetchTexts } from '../../store/textsSlice';

// function AdminTextsComponent() {
//   const dispatch = useDispatch()
//   const { loading, error, data } = useSelector(state => state.texts)
//   const { currentUser } = useSelector((state) => state.user);
//   const [userTexts, setUserTexts] = useState([]);
//   useEffect(() => {
//       const fetchPosts = async () => {
//         try {
//           const res = await fetch(`/api/text/getTexts?userId=${currentUser._id}`);
//           const data = await res.json();
//           if (res.ok) {
//               setUserTexts(data.texts);
//             console.log(data.texts)
//           }
//         } catch (error) {
//           toast.error(error.message);
//         }
//       };
//       if (currentUser.isAdmin) {
//         fetchPosts();
//       }
//     }, [currentUser._id]);

//   useEffect((currentUser) => {


//          dispatch(fetchTexts(currentUser));


//   }, [dispatch, currentUser]);



//   return (
//     <div className='bg-white w-full  min-h-full flex-1 p-3 space-y-5 rounded-lg font-sans'>
//       {
//         data && data.map((text, i) => (
//           <div key={i} className='p-4 bg-gray-100 space-y-2 relative rounded-lg'>
//             <div className='text-xs absolute right-2 top-2'> userId: <span className='text-sky-700 '>{currentUser._id}</span> </div>
//             <div className='text-red-500 text-lg '><span className='text-black font-extrabold text-xl p-1'>Title:</span>{text.title}</div>
//             <div className='pl-3 post-content text-md' ><span className='text-black font-extrabold text-lg p-1'>Content:</span>{text.content}</div>
//             <div className='text-xs absolute right-2 bottom-2'> textId: <span className='text-sky-700 '>{text._id}</span> </div>

//             <div>
//               <Link to={`/update-text/${text._id}`}>
//                 <button className='p-2 rounded-lg bg-sky-600 text-white w-56'> Edit</button>
//               </Link>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default AdminTextsComponent


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTexts } from '../../store/textsSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function AdminTextsComponent() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.texts);
  const { currentUser } = useSelector(state => state.user);

  useEffect(() => {
    if (currentUser && currentUser._id) {
      dispatch(fetchTexts(currentUser));
    }
  }, [dispatch, currentUser]);

  console.log('Component data:', data); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error(error);
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>No texts available</div>;
  }

  return (
    <div className='bg-white w-full min-h-screen  flex-1 p-3 space-y-5 rounded-lg font-sans'>
      {data?.texts?.map((text, i) => (
        <div key={i} className='p-7 bg-gray-100 space-y-2 relative rounded-lg'>
          <div className='text-xs absolute right-2 top-2'>textId: <span className='text-sky-700'>{text._id}</span></div>
          <div className='text-red-500 text-lg'><span className='text-black font-extrabold text-xl p-1'>Title:</span>{text.title}</div>
          <div className='pl-3 post-content text-md'><span className='text-black font-extrabold text-lg p-1'>Content:</span>{text.content}</div>
          
          <div>
            <Link to={`/update-text/${text._id}`}>
              <button className='p-2 rounded-lg bg-sky-600 text-white w-full md:w-56'> Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}


export default AdminTextsComponent;
