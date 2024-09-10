import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';




function CreatePost() {
    const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
//   const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
//   const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUpdloadImage = async () => {
    try {
      if (!file) {
        toast.error('Please select an image');
        return;
      }
     
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          toast.error('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
           
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      toast.error('Image upload failed');
      setImageUploadProgress(null);
     toast.error(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      if (res.ok) {
      
        navigate(`/admin?tab=posts`);
      }
    } catch (error) {
      toast.error(error.message,'Something went wrong');
    }
  };


    return (
        <div className='p-5 max-w-3xl mx-auto min-h-screen lg:pt-20 space-y-5'>
            <h1 className='text-center  text-3xl lg:text-5xl font-semibold font-inter'> Create a Post</h1>

            <form className='flex flex-col gap-4 space-y-5' onSubmit={handleSubmit}>

                <input onChange={(e)=>setFormData({...formData,title:e.target.value})} type="text" placeholder='Title' required id='title' 
                className='flex-1 p-2 dark:bg-gray-900 border border-black dark:border-white rounded-lg  font-bold outline-1' />
                <div className='border-4 gap-4 flex lg:flex-row flex-col justify-between items-center border-teal-500 border-dotted p-3 '>
                    <input onChange={(e)=>setFile(e.target.files[0])} 
                    type="file"
                     accept='image/*'
                      className='bg-gradient-to-tr p-2 rounded-lg
                     text-white font-bold bg-gradient from-pink-600 via-purple-500 to-blue-500' />

                    <button type='button' 
                    onClick={handleUpdloadImage} 
                    disabled={imageUploadProgress} 
                    className='bg-gradient-to-tr p-2 rounded-lg text-white font-bold bg-gradient from-pink-600 via-purple-500 to-blue-500'> {
                        imageUploadProgress? (
                            <div className='w-16 h-16'> 
                            <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`}/>
                            </div>
                        ):("upload")
                    }</button>
            
                
                    </div>
                    {
                        formData.image && (
                            <div className='w-full  flex items-center justify-center bg-sky-100'>
                            <img src={formData.image} alt='upload' className='w-full h-72 object-contain'/>
                      
                            </div>  )
                    }
               <div className='  border-red-500 lg:h-80 h-72'>
               <ReactQuill 
               theme='snow'
                placeholder='write on the line' 
                className='lg:h-72 h-52 dark:text-white'
                onChange={
                   (value)=>{
                       setFormData({...formData,content:value})
                   }
               }/>
               </div>
                <button 
                 type='submit '
                 className=' p-4 rounded-lg text-white font-bold
                  bg-gradient-to-tr from-pink-600 via-purple-500 to-blue-500'>
                 Publish
                 </button>
            </form>
            
        </div>
    )
}

export default CreatePost