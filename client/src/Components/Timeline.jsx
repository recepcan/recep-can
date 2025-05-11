import React from 'react'
import { elements } from './itemsarray';
function Timeline() {

    const elementss = [
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
    <div >
         


{elements.map((element,index)=>(
  <div className={`flex flex-col odd:items-end  border-black`}>
              <div className={`flex  w-1/2 box-content  border-red-500 group`}>

{index % 2 === 0 && <div className='h-5 w-5 mt-3 rounded-full border-2 border-blue-500'></div>

               }  
              
                {/* Başlık ve Açıklama */}
                <div className=" text-left min-h-32 w-full border-gray-100 dark:border-[#030620]
                 border-2 box-border flex flex-col items-start justify-center group group-hover:bg-gray-300
                  group-hover:border-sky-600 dark:group-hover:bg-gray-900 rounded-lg  transition-all 
                  duration-500 ease-in-out">
                  <h3 className={`text-2xl w-full font-semibold flex items-center odd: 
                    ${
      index % 2 === 0 ? 'justify-start' : 'justify-end'
    }
                     border-black
                   p-1 space-x-3`} > 
                   <h1>{element.name}</h1> 
                   <div>{element.icon}</div>
                    </h3>
                  <p className={`text-lg dark:text-white text-gray-600 tracking-wide font-playwrite
                   leading-8 p-5
                   ${
      index % 2 === 0 ? 'text-start' : 'text-end'
    }
                   `}
                   >{element.explain} Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                   Esse eius reiciendis nihil minima quibusdam, consectetur sunt a in dignissimos dolor 
                   expedita eligendi velit corporis eaque quasi quae optio animi nostrum odio, harum unde
                    non aspernatur voluptate rerum. Quidem mollitia soluta consequuntur reprehenderit quae
                     delectus dolores, fuga velit suscipit. Magnam mollitia exercitationem obcaecati facere 
                     officiis totam quas voluptate accusantium debitis reiciendis. Maxime quam, ab minima 
                     quia eaque dolore? Delectus, mollitia sunt, quasi velit neque odio voluptas vel 
                     reiciendis, vero totam error.
                     </p>
                  </div>
  
               {index % 2 != 0 && <div className='h-5 w-5 mt-3 rounded-full border-2 border-blue-500'></div>

               }   

              </div>

              

  </div>
))}
             
            
        </div>
  )
}

export default Timeline

