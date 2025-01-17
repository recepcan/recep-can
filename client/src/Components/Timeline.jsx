import React from 'react'
import { elements } from './itemsarray';
function Timeline() {

    const events = [
        { title: "HTML", description: "Bu, ilk adımdır." },
        { title: "CSS", description: "İlerleme kaydedildi." },
        { title: "JAVASCRİPT", description: "Bu, orta adımdır." },
        { title: "REACTJS", description: "Bu, son adımdır." },
        { title: "NODEJS", description: "Bu, son adımdır." },
        { title: "EXPRESSJS", description: "Bu, son adımdır." },
        { title: "MONGODB", description: "Bu, son adımdır." },
        { title: "FİREBASE", description: "Bu, son adımdır." },
      ];


  return (
    <div className="flex flex-col items-start py-24 ">
          {elements.map((event, index) => (
            <div key={index} className="flex flex-col  items-start">


              <div className='flex group'>
               
                <div className='flex flex-col items-center     shadow-gray-400 pr-3 '>
                  <div className='flex items-center justify-center group  border-black  pl-[52px] space-x-3'>
                   {/*Dış Daire */}
                    <div className="flex items-center relative justify-center  w-10 h-10 border border-black  bg-gray-100 shadow-lg shadow-gray-900  group-hover:bg-gray-600 group-hover:scale-125 transition-all duration-500 ease-in-out text-white rounded-full">
                       {/*İç Daire */}
                    <div className="flex items-center justify-center  w-8 h-8  border-2 border-white bg-gray-600 text-white rounded-full group-hover:bg-sky-600 group-hover:scale-50 transition-all duration-500 ease-in-out">

                      </div>

                    </div>
                    {/* Yatay Çizgi */}
                    <div className=' bg-gray-600 border border-black shadow-lg shadow-gray-900 group-hover:border-gray-600 group-hover:rounded-l-none transition-all duration-500 ease-in-out group-hover:scale-150 w-10 h-2 p-1 rounded-lg'></div>
                  </div>


                  {/*Dikey Çizgi */}
                  {index !== elements.length - 1 && (
                    <div className="w-1 p-1 rounded-lg m-4 border transition-all duration-500 ease-in-out group-hover:bg-sky-600 border-black h-full bg-gray-600 shadow-lg shadow-gray-900  "></div>
                  )}
                </div>
                {/* Başlık ve Açıklama */}
                <div className=" text-left min-h-32 w-full border-gray-100 dark:border-[#030620] border-2 box-border flex flex-col items-start justify-center group group-hover:bg-gray-300 group-hover:border-sky-600 dark:group-hover:bg-gray-900 rounded-lg  transition-all duration-500 ease-in-out">
                  <h3 className="text-2xl font-semibold flex items-center justify-center  border-black p-1 space-x-3 "> <h1>{event.name}</h1> <div>{event.icon}</div> </h3>
                  <p className="text-lg dark:text-white text-gray-600 tracking-wide font-playwrite leading-8 p-5">{event.explain} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse eius reiciendis nihil minima quibusdam, consectetur sunt a in dignissimos dolor expedita eligendi velit corporis eaque quasi quae optio animi nostrum odio, harum unde non aspernatur voluptate rerum. Quidem mollitia soluta consequuntur reprehenderit quae delectus dolores, fuga velit suscipit. Magnam mollitia exercitationem obcaecati facere officiis totam quas voluptate accusantium debitis reiciendis. Maxime quam, ab minima quia eaque dolore? Delectus, mollitia sunt, quasi velit neque odio voluptas vel reiciendis, vero totam error.</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Timeline