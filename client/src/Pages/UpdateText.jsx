import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function UpdateText() {
  const [text, setText] = useState({ title: '', content: '' });
  const [data, setData] = useState({ title: '', content: '' });

  const fetchTextById = async () => {
    try {
      const response = await fetch(`/api/text/texts/66b124be8e2076ecbe826a24`);
      if (!response.ok) {
        toast.error('Network response was not ok');
        return null;
      }
      const text = await response.json();
      return text;
    } catch (error) {
      toast.error('There has been a problem with your fetch operation:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTextById();
        if (result) {
          setText(result);
          setData(result); // Update `data` state with fetched data
        }
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/text/texts/update/${text._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newData = await res.json();
      if (!res.ok) {
        toast.error(newData.message);
        return;
      }

      if (res.ok) {
       
        toast.success('update succeess')
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='pt-32 bg-gradient-to-t from-gray-100 via-sky-300 to-gray-100 h-screen flex flex-col items-center justify-center text-center'>
      <form onSubmit={handleSubmit} className='w-1/2  flex flex-col space-y-5'>
        <h1 className='text-3xl text-white font-extrabold '>About Card Update Form</h1>
        <textarea
          onChange={handleChange}
           rows="3"
          placeholder='title'
          name="title"
          value={data.title}
          className='p-3 rounded-lg w-full rows'
        />
        <textarea
          onChange={handleChange}
          rows="5"
          placeholder='content'
          name='content'
          value={data.content}
          className='p-3 rounded-lg w-full'
        />
        <button className='w-full p-3 bg-sky-700 rounded-lg text-white' type='submit'>Update</button>
      </form>
    </div>
  );
}

export default UpdateText;
