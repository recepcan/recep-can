import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ThreeDCard from './ThreeDCard'

function ProfilCard() {
  const { language } = useSelector(state => state.header)

  return (
    <div className=' w-[954px] h-[400px] dark:backdrop-blur-md   shadow-gray-400  rounded-lg flex transition-colors duration-300
    box-content text-center items-center justify-center   my-8 p-20 
      max-[600px]:w-[350px] max-[600px]:h-[700px] max-[600px]:flex-col   max-[600px]:text-sm max-[600px]:p-2      
      dark:bg-gray-950  dark:border border-purple-500  
       '>

      <div className='w-1/2 h-full 
        max-[600px]:h-[225px] max-[600px]:w-[225px] max-[600px]:mt-3
       border-1 rounded-lg'>
        {/*<img src={fotoWeb} className='w-full h-full  object-fill rounded-lg' />*/}
        <ThreeDCard />
      </div>

      <div className=' w-1/2 max-[600px]:mt-2 rounded-lg relative max-[600px]:w-[350px] min-[650px]:ml-[70px] flex flex-col items-center justify-center '>
        <div className='w-full p-2 m-2  rounded-lg flex justify-center items-center'>
          <h1 className='flex text-center    text-[55px] font-serif   mb-1 max-[600px]:mb-2 max-[600px]:text-[24px]  bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-red-500 font-bold tracking-wider ' >
            Recep Can
          </h1>
          
        </div>
        <div className='w-1/2     rounded-lg '>
          <h3 className='tracking-normal  bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-red-500 '>
            {language ? "Web Geliştirici"
              : "Web Developer"}
          </h3>
        </div>
        <div className='p-5 rounded-lg m-2   '>
        
        <p className='flex max-[600px]:mt-16'>
          <span className='leading-5 '>
            
            {
              language ? "Merhaba, ben Recep. İzzet Baysal Üniversitesi Psikolojik Danışmanlık ve Rehberlik 3. sınıf öğrencisiyim. Uzun zamandır kendimi web geliştirme konusunda eğitiyorum. Burada öğrenirken geliştirdiğim ve hizmet olarak sunduğum projeleri paylaşıyorum. Eğer siz de kişisel website sahibi olmak istiyorsanız iletişime geçmeniz yeterli olacaktır. "
                : " Hello, I'm Recep. I'm a 3rd-year student in Psychological Counseling and Guidance at Izzet Baysal University. I've been educating myself in web development for a while now. Here, I share the projects I've developed and offer them as a service. If you're interested in having your own personal website, all you need to do is get in touch."
            }
          </span>
        </p>
        </div>
        <div className='p-2 max-[600px]:w-full  bg-gradient-to-r from-sky-700 via-gray-700 to-purple-700 w-full 
      dark:bg-purple-900 dark:border-purple-800 dark:hover:bg-transparent dark:hover:text-white dark:hover:tracking-wider
      text-white rounded-lg box-border transition-all border-purple-900 font-medium hover:bg-white hover:text-black border-2'>
          <NavLink to='/İletişim' >
            <button className='w-full h-full text-xl  bg-gradient-to-r from-sky-700 via-gray-700 to-purple-700'>{
              language ? "İletişime Geç"
                : "Get Contact"
            }
            </button>
          </NavLink>
        </div>

      </div>


    </div>
  )
}

export default ProfilCard