import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function ResetPassword() {
    const navigate = useNavigate();
    const {id,token}=useParams()
    const [formdata, setformData] = useState({ password: "" });
    console.log(formdata);

    const handleChange = (e) => {
        setformData({ ...formdata, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password } = formdata;

        if (!password) {
            return toast.error('Lütfen bütün alanları doldurun');
        }

        try {
            const res = await fetch(`/api/auth/reset-password/${id}/${token}`, {
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
        <div className='w-full flex items-center md:justify-center min-h-screen p-10 md:pt-20'>
            <div className='md:w-1/3 w-full  bg-gray-300 rounded-lg p-5 space-y-5
            flex flex-col items-center md:justify-between '>
                <h1 className='text-3xl '>Reset Password</h1>
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    className='rounded-lg p-2 w-full'
                    placeholder='password'
                />
                <button
                    onClick={handleSubmit}
                    className='w-full p-2 bg-indigo-500 text-white text-2xl rounded-lg'>
                  Update 
                </button>
            </div>
        </div>
    );
}

export default ResetPassword;
