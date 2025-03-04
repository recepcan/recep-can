import React, { useState } from 'react';
import { BiLogoFirebase, BiLogoMongodb } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

function ContentCard() {
    const tabs = [
        {
            title: "React",
            content: "React, Facebook tarafından geliştirilen açık kaynaklı bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için bileşen tabanlı bir yaklaşım sunar. Tek yönlü veri akışı ve sanal DOM sayesinde yüksek performanslı ve etkileşimli web uygulamaları geliştirilmesini sağlar. Geniş bir ekosisteme sahip olan React, geliştiricilere esneklik ve güçlü araçlar sunar.React, Facebook tarafından geliştirilen açık kaynaklı bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için bileşen tabanlı bir yaklaşım sunar. Tek yönlü veri akışı ve sanal DOM sayesinde yüksek performanslı ve etkileşimli web uygulamaları geliştirilmesini sağlar. Geniş bir ekosisteme sahip olan React, geliştiricilere esneklik ve güçlü araçlar sunar.React, Facebook tarafından geliştirilen açık kaynaklı bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için bileşen tabanlı bir yaklaşım sunar. Tek yönlü veri akışı ve sanal DOM sayesinde yüksek performanslı ve etkileşimli web uygulamaları geliştirilmesini sağlar. Geniş bir ekosisteme sahip olan React, geliştiricilere esneklik ve güçlü araçlar sunar.React, Facebook tarafından geliştirilen açık kaynaklı bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için bileşen tabanlı bir yaklaşım sunar. Tek yönlü veri akışı ve sanal DOM sayesinde yüksek performanslı ve etkileşimli web uygulamaları geliştirilmesini sağlar. Geniş bir ekosisteme sahip olan React, geliştiricilere esneklik ve güçlü araçlar sunar."
            , icon: <FaReact color='blue' />
        },
        {
            title: "Express",
            content: "Express.js, Node.js için minimalist ve esnek bir web uygulama çerçevesidir. RESTful API'ler ve web uygulamaları geliştirmek için kullanılır. Basit bir yapı ve geniş bir modül ekosistemi sunarak, hızlı ve verimli uygulama geliştirme süreçlerini destekler. Middleware kullanımı ile istek ve yanıt işleme oldukça özelleştirilebilir."
            , icon: <SiExpress color='gray' />

        },

        {
            title: "NodeJS",
            content: "Node.js, sunucu tarafında JavaScript çalıştırmak için kullanılan açık kaynaklı bir platformdur. Asenkron ve olay tabanlı yapısı sayesinde yüksek performanslı ve ölçeklenebilir uygulamalar geliştirilmesine olanak tanır. NPM (Node Package Manager) ile geniş bir paket ve modül ekosistemine sahiptir, bu da hızlı geliştirme ve entegrasyon sağlar."
            , icon: <DiNodejs color='green' />
        },
        {
            title: "Firebase",
            content: "Firebase, Google tarafından sağlanan bir mobil ve web uygulama geliştirme platformudur. Gerçek zamanlı veritabanı, kimlik doğrulama, bulut depolama ve analiz gibi hizmetler sunar. Firebase, geliştiricilere hızlı bir şekilde ölçeklenebilir ve güvenli uygulamalar oluşturma imkanı tanır. Entegre araçları sayesinde, uygulama geliştirme sürecini basit ve hızlı hale getirir."
            ,icon:<BiLogoFirebase color='orange' />
        },

        {
            title: "MongoDB",
            content: "MongoDB, belge tabanlı bir NoSQL veritabanıdır. JSON benzeri BSON formatında veri saklar ve yüksek esneklik sunar. Şemalardan bağımsız yapısı sayesinde dinamik veri yapıları ve ölçeklenebilir uygulamalar oluşturulmasına imkan verir. Büyük veri işleme ve hızlı sorgu performansı ile bilinir, özellikle hızlı gelişen uygulamalar için idealdir."
            , icon: <BiLogoMongodb color='green' />
        }

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
