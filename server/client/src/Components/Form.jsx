import React from 'react'
import { Formik, useFormik } from 'formik';
function Form() {

    const {values,handleSubmit,handleChange,errors,handleBlur,touched,isSubmitting,validateOnChange}=useFormik({
        initialValues:{
            email:'',
            name:'',
            age:'',
            phoneNumber:'',
            message:'',

        },  
        onSubmit:values=>{
            alert(JSON.stringify(values, null, 2));
        },
        validate:values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.name){
                errors.name='Required'
            }
            if (!values.age){
                errors.age='Required'
            }
            if (!values.phoneNumber){
                errors.phoneNumber='Required'
            }
            return errors;
          }
      
    })
    return (
        <div className='bg-white p-8 flex flex-col items-center justify-center shadow-lg shadow-gray-500  backdrop-blur-md dark:bg-black/20 dark:border-2 border-green-500 rounded-lg '>
        <h1 className='text-4xl m-2 font-serif'>İletişim Formu </h1>
        <h2 className='text-md text-gray-500 m-2'>Size en kısa sürede ulaşılacaktır. Güzel bir gün dileriz.</h2>
            <form className='flex flex-col bg-transparent border-red-500 p-2 w-full  '  onSubmit={handleSubmit}>
              
               <input  className={`bg-transparent text-black placeholder:text-black ${!values.name &&touched.name && 'border-2 border-red-500  ' } dark:bg-[#2d3748]  box-border transition-colors  border-2 duration-300 p-5 m-2 rounded-lg  outline-none  w-full`}
               type="text"
               name="name"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.name}
               placeholder='Name&Surname'
           /> 
           

           
                <input className={`bg-transparent text-black placeholder:text-black ${!values.age && touched.age &&'border-2 border-red-500' } dark:bg-[#2d3748] transition-colors duration-300  border-2 p-5 m-2 rounded-lg  outline-none  w-full`}
                type="number"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                placeholder='Age'
            />
          
                <input className={`bg-transparent text-black placeholder:text-black ${!values.email &&  touched.email &&'border-2 border-red-500' } dark:bg-[#2d3748] transition-colors border-2 duration-300 p-5 m-2 rounded-lg  outline-none  w-full`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='email'
                />
               

                <input className={`bg-transparent text-black placeholder:text-black ${!values.number && touched.number &&'border-2 border-red-500' } dark:bg-[#2d3748] transition-colors border-2 duration-300 p-5 m-2 rounded-lg  outline-none  w-full`}
                    type="number"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    placeholder='Phone Number'
                />
                
                <input className='bg-transparent text-black placeholder:text-black dark:bg-[#2d3748] transition-colors duration-300 p-5 m-2 rounded-lg  outline-none  w-full'
                    type="text"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder='Message'
                />

                <button 
                className='w-full rounded-lg m-2 bg-green-500 text-white p-2' type="submit" disabled={isSubmitting}
                  >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form

