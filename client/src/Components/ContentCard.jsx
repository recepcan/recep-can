import React, { useState } from 'react';
import { BiLogoFirebase, BiLogoMongodb } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

function ContentCard() {
    const tabs = [
        {
            title: "Front-end",
            content: "Front-end, bir web sitesinin kullanıcı tarafından görülen ve etkileşim kurulan kısmını ifade eder. Yani, bir web sitesinde gördüğünüz her şey front-end'in bir parçasıdır. Ben, React kullanarak bu ön yüzü kodluyor ve kullanıcı dostu, şık tasarımlara sahip, optimize edilmiş uygulamalar geliştiriyorum."
            , icon: <FaReact color='blue' />
        },
        {
            title: "Back-end",
            content: "Node.js ve Express.js kullanarak bir web sitesinin arka ucunu, yani kullanıcıların doğrudan göremediği kısmını kodluyorum. API'ler oluşturarak veri akışını yönetiyor, kimlik doğrulama işlemlerini gerçekleştiriyor ve diğer arka uç programlama görevlerini yerine getiriyorum."
            , icon: <SiExpress color='gray' />

        },

        {
            title: "UI-UX",
            content: "Sitenin tasarımı ve kullanıcı deneyimi, bir web sitesinin görsel ve işlevsel olarak kullanıcıya nasıl hissettirdiğini ifade eder. Bu alan her ne kadar yazılımın dışında gibi görünse de, bu konuda da kendimi geliştirmeye devam ediyorum. Basit, estetik ve kullanıcı dostu tasarımlar oluşturarak müşterilere etkileyici deneyimler sunuyorum."
            
        },
        {
            title: "Security",
            content: "Firebase kullanarak kimlik doğrulama işlemlerini daha güvenli hale getiriyorum. Yönetim panelinize erişim için bu tür bir kimlik doğrulama sistemi kullanılıyor ve bu, verilerinizin güvenliğini sağlıyor. Bu sayede hem kullanıcıların güvenliği artırılıyor hem de sitenizin güvenilirliği korunuyor."
            ,icon:<BiLogoFirebase color='orange' />
        },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].title); // Başlangıçta ilk başlık aktif

    const handleTabClick = (tabTitle) => {
        setActiveTab(tabTitle);
    };

    return (
        <div className=" lg:h-[400px] h-[330px] min-w-full  py-3 lg:pb-10  box-border relative  shadow-xl shadow-gray-400 flex flex-col items-center justify-between space-y-0
         hover:shadow-gray-600 dark:border border-blue-300 transition-all dark:from-blue-900 bg-gradient-to-l from-blue-200 via-blue-300 to-blue-400  rounded-xl dark:text-white ">
            <div className=" w-full h-[70px]    p-2  flex  justify-evenly items-center overflow-hidden overflow-x-auto custom-scrollbar rounded-lg ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={` ${activeTab === tab.title ? 
                            ' space-x-1  p-2 font-bold bg-gray-100 text-black   border-2 border-gray-100  box-border rounded-xl  cursor-pointer transition-all h-full flex justify-center items-center' 
                            : ' space-x-1 p-2  text-white  rounded-xl hover:border-y-2 cursor-pointer transition-all border-white box-border h-full flex justify-center items-center'}`}
                        onClick={() => handleTabClick(tab.title)}
                    >
                   <div className={`${activeTab === tab.title ? 'text-white text-2xl max-md:text-4xl' : ' text-2xl max-md:text-4xl text-black'}`}> 
                   {tab.icon}
                   </div>
                        <h1 className='text-lg max-md:hidden '>{tab.title}</h1>
                    </button>
                ))}
            </div>

           
            <div className="  dark:text-white items-center justify-center flex-1 lg:h-72 w-[90%] p-3 lg:p-8 
            text-sm md:text-lg font-sans
             scrollbar-hide overflow-auto custom-scrollbar tracking-wider leading-6">
                {tabs.map((tab, index) => (
                    activeTab === tab.title && <div key={index}>{tab.content}</div>
                ))}
            </div>
            
        </div>
    );
}

export default ContentCard;
