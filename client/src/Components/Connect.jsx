import React, { useEffect, useMemo, useState } from 'react'
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
  useMemo(()=>console.log(formdata),[formdata])

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
    <div className='w-full  border-black  flex flex-col items-center 
     bg-gray-100
     dark:bg-[#030620] '>
      <h1 className='text-5xl lg:text-7xl font-inter -tracking-[1px] leading-tight font-extrabold 
       from-blue-800 via-blue-600 to-purple-500 
        bg-clip-text text-transparent bg-gradient-to-br
        dark:from-blue-100 dark:via-blue-300 dark:to-blue-500'>
        Let's Connect</h1>
      <hr className='w-[90%] my-8 lg:my-16 dark:border-white border-black' />
      <div className=' w-[90%] h-full flex flex-col lg:flex-row max-md:space-y-5 lg:space-x-2 border-yellow-500'>

        <div className='w-full lg:w-1/2  min-h-full p-5 flex flex-col space-y-5 lg:space-y-8 rounded-xl text-center   border-gray-400'>

         
            <h1 className='text-3xl lg:text-5xl  -tracking-[1px] leading-tight font-extrabold font-inter
          bg-clip-text text-transparent bg-gradient-to-br
            from-blue-800 via-blue-600 to-purple-500 
        dark:from-red-100 dark:via-red-300 dark:to-red-500'>
             {textById?.title}
             </h1>

            <p className='text-lg md:text-2xl font-mono font-semibold leading-normal '>
           {textById?.content}
            </p>

        </div>


        <div className="w-full lg:w-1/2 h-full space-y-3  p-5 rounded-lg flex items-center justify-center flex-col  
        transition-all  border-blue-500 bg-transparent">

          
            <h1 className='text-3xl lg:text-5xl  -tracking-[1px] leading-tight font-extrabold font-inter
              bg-clip-text text-transparent bg-gradient-to-br
            from-blue-800 via-blue-600 to-purple-500 
        dark:from-red-100 dark:via-red-300 dark:to-red-500'>
            Send me an email
            </h1>
            <input 
            onChange={handleChange}
            type="text"
             name='name'
              id='name'
             placeholder='Name&Surname'
              className='w-full p-5  rounded-lg  font-bold bg-gray-100 dark:bg-[#030620] border border-black  dark:border-white dark:text-white ' />

            <input 
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder='email' 
            className='w-full p-5  rounded-lg  font-bold bg-gray-100 dark:bg-[#030620] border border-black  dark:border-white dark:text-white ' />
           
            <textarea 
            type='text'
            name="message"
            id='message'
            onChange={handleChange}
             placeholder='Your Message' 
             className='w-full p-5  rounded-lg  font-bold bg-gray-100 dark:bg-[#030620] border border-black  dark:border-white dark:text-white '>
            </textarea>
           
            <div className='flex flex-col sm:flex-row w-full sm:space-x-5 items-center justify-center '>
           <ReCAPTCHA
              
              sitekey= "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />

            <button 
            disabled={!verified}
            onClick={handleSubmit}
            className='p-5 text-xl w-full  rounded-lg hover:scale-105 text-white font-inter font-semibold 
             bg-gradient-to-b  hover:bg-gradient-to-l transition-all  duration-500 
               from-green-700 via-green-600 to-green-400  '>
              Send
              
              </button>
              
            </div>
         

        </div>
        
      </div>
     
    </div>
  )
}

export default Connect


 {/*     <div className="relative p-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-md">
      <input
        type="text"
        className="w-full p-2 border-none rounded-md bg-black focus:outline-none"
        placeholder="Gradient border input"/>
      
    </div>*/}