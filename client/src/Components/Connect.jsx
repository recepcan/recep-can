import React, { useEffect, useState } from 'react'
import { FaReact, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTextById } from '../store/textsSlice';
import Loading from './Loading';

function Connect() {
  function onChange(value) {
    console.log("Captcha value:", value);
    setverified(true)
  }
  const [verified, setverified] = useState(false)
  const navigate = useNavigate();
  const [formdata, setformData] = useState({ email: "",message:"",name:"" });
  console.log(formdata);

  const handleChange = (e) => {
      setformData({ ...formdata, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, message } = formdata;
  
    if (!email || !name || !message) {
      return toast.error('Lütfen bütün alanları doldurun');
    }
  
    try {
      const res = await fetch('/api/contact/message', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
      });
  
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
  
        if (!res.ok || data.success === false) {
          return toast.error(data.message || "Bir hata oluştu");
        }
  
        toast.success(data.message || "Mesajınız başarıyla iletildi");
        navigate('/');
      } else {
        throw new Error("Sunucu JSON formatında bir yanıt döndürmedi.");
      }
  
    } catch (error) {
      toast.error("Bir hata oluştu: " + error.message);
    }
  };




  const {textByIdError,textByIdLoading,textById}=useSelector(state=>state.texts)
  const {currentUser}=useSelector(state=>state.user)
  const dispatch=useDispatch()
 
const textId='66bb4c90f85daded200e6e75'
  useEffect(() => {
    if (textId) {
        dispatch(fetchTextById(textId)); // Thunk'ı dispatch ediyoruz
    }
}, [dispatch, textId]);

if (textByIdLoading) return <Loading/>
if (textByIdError) return <div>Error: {textByIdError}</div>;

  return (
    <div className='w-full min-h-[800px]  flex flex-col items-center bg-gradient-to-b from-gray-100 via-sky-200 to-gray-100 dark:from-gray-900 dark:via-teal-950 dark:to-gray-900 '>
      <h1 className='text-7xl font-inter -tracking-[1px] leading-tight from-blue-800 via-blue-600 to-purple-500 font-extrabold dark:text-shadow-lg bg-clip-text text-transparent bg-gradient-to-br dark:from-green-100 dark:via-green-500 dark:to-green-700'>
        Let's Connect</h1>
      <hr className='w-[90%] my-10 dark:border-green-500 border-black' />
      <div className=' w-[90%] h-full flex space-x-2'>

        <div className='w-1/2 h-full p-5 flex flex-col space-y-10 rounded-xl text-start   border-gray-400'>

         
            <h1 className='text-5xl  -tracking-[1px] leading-tight font-extrabold bg-clip-text bg-gradient-to-b text-transparent font-inter from-blue-800 via-blue-600 to-purple-500
           dark:text-white'>
             {textById?.title}
             </h1>

            <p className='text-lg font-mono font-semibold'>
           {textById?.content}
            </p>

        </div>


        <div className='w-1/2 h-full  p-5 rounded-lg flex items-center justify-center flex-col shadow-lg shadow-gray-400 hover:shadow-gray-600 
        transition-all dark:border border-green-500 bg-white dark:bg-[#17252a] '>

          
            <h1 className='font-inter text-5xl bg-clip-text dark:text-transparent bg-gradient-to-br from-green-100 via-green-500 to-green-700'>
            Send me an email
            </h1>
            <input 
            onChange={handleChange}
            type="text"
             name='name'
              id='name'
             placeholder='Name&Surname'
              className='w-full p-5 m-3 rounded-lg text-white font-bold bg-gray-300 dark:bg-green-100' />

            <input 
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder='email' 
            className='w-full p-5 m-3 rounded-lg text-white font-bold bg-gray-300 dark:bg-green-100' />
            {/*     <div className="relative p-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-md">
      <input
        type="text"
        className="w-full p-2 border-none rounded-md bg-black focus:outline-none"
        placeholder="Gradient border input"/>
      
    </div>*/}
            <textarea 
            type='text'
            name="message"
            id='message'
            onChange={handleChange}
             placeholder='Your Message' 
             className='w-full p-5 m-3 rounded-lg text-white font-bold bg-gray-300 dark:bg-green-100'>
            </textarea>
            <button 
            disabled={!verified}
            onClick={handleSubmit}
            className='p-5 text-xl w-1/2 rounded-lg bg-gradient-to-b hover:scale-95 hover:bg-gradient-to-l transition-all  duration-500  from-blue-200 via-blue-300 to-blue-400 '>
              Send</button>
              <ReCAPTCHA
              sitekey= "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />,
          {/*  */}

        </div>
        
      </div>
     
    </div>
  )
}

export default Connect