import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GetPosts from '../Components/GetPosts';

function ProjectPage() {
  // Kategori durumunu tutmak için state
  const [ctg, setCtg] = useState('all'); // Varsayılan olarak 'all'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="dark:text-white transition-colors duration-500 w-full relative border-black
      flex flex-col items-center justify-start dark:bg-[#030620] min-h-screen md:pt-24"
    >
      <div className="dark:bg-gradient-to-t text-center">
        <h1
          className="text-5xl font-semibold font-inter p-3
          bg-clip-text text-transparent bg-gradient-to-r
          from-sky-500 via-purple-500 to-red-500
          dark:from-sky-100 dark:via-sky-300 dark:to-sky-500"
        >
          My Works
        </h1>

        {/* Kategori Seçim Butonları */}
        <div className="flex flex-wrap w-full p-5 rounded-lg  gap-3 justify-center">
          {['all','front-end','full-stack','mobil'].map((category) => (
            <button
              key={category}
              className={`p-3 text-xl rounded-md shadow-md shadow-gray-400 ${
                ctg === category
                  ? 'bg-gradient-to-r from-orange-500  to-red-500 text-white' // Aktif kategori vurgulama
                  : 'bg-white dark:bg-[#374151] border hover:border-orange-600 hover:scale-105 hover:shadow-red-500 transition-all'
              }`}
              onClick={() => setCtg(category)} // Kategori durumunu güncelle
            >
              {category}
            </button>
          ))}
        </div>

        {/* GetPosts Bileşeni */}
        <GetPosts limit={50} ctg={ctg} />
      </div>
      
    </motion.div>
  );
}

export default ProjectPage;
