import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ForgotPassword() {
    const navigate = useNavigate();
    const [formdata, setformData] = useState({ email: "" });
    console.log(formdata);

    const handleChange = (e) => {
        setformData({ ...formdata, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email } = formdata;

        if (!email) {
            return toast.error('Lütfen bütün alanları doldurun');
        }

        try {
            const res = await fetch('https://my-personal-blog-onvercel-api.vercel.app/api/auth/forgot-password', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata)
            });

            const data = await res.json();

            if (!res.ok || data.success === false) {
                return toast.error(data.message || "Bir hata oluştu");
            }

            toast.success(data.message || "E-posta başarıyla gönderildi");
            navigate('/sign-in');

        } catch (error) {
            toast.error("Bir hata oluştu: " + error.message);
        }
    };

    return (
        <div className='w-full flex items-center justify-center min-h-screen p-10 md:pt-20'>
            <div className='md:w-1/3 w-full space-y-5 bg-gray-300 rounded-lg p-5 flex flex-col items-center justify-between '>
                <h1 className='text-3xl '>Forgot Password</h1>
                <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    className='rounded-lg p-2 w-full'
                    placeholder='email'
                />
                <button
                    onClick={handleSubmit}
                    className='w-full p-2 bg-indigo-500 text-white text-2xl rounded-lg'>
                    Send Email
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;
