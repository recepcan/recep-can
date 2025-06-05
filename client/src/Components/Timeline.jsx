import React from 'react'
import { elements } from './itemsarray';
function Timeline() {

    const elementss = [
        { title: "HTML",
           description: "HTML, web sayfalarının temel yapısını oluşturmak için kullanılan işaretleme dilidir. Web tarayıcıları, HTML kodlarını okuyarak kullanıcıya görsel olarak anlamlı bir sayfa sunar. Paragraflar, başlıklar, bağlantılar, görseller ve tablolar gibi içeriklerin yapısını tanımlamak için kullanılır. Her öğe etiketler ile belirtilir ve bu etiketler içeriklerin ne olduğunu belirtir. HTML, web geliştirme sürecinin ilk adımıdır ve diğer teknolojilerle birlikte kullanılarak işlevsel siteler oluşturulur. " },
        { title: "CSS", description: "CSS, HTML ile oluşturulan yapıya stil kazandırmak için kullanılan bir biçimlendirme dilidir. Web sayfalarının renklerini, yazı tiplerini, düzenlerini ve geçiş efektlerini tanımlayarak kullanıcı deneyimini iyileştirir. CSS sayesinde aynı HTML yapısı, farklı görünümlerle sunulabilir. Sayfa düzenlerini daha esnek hale getirmek için Flexbox ve Grid gibi sistemler sunar. Genellikle HTML dosyasına bağlı olarak veya doğrudan içinde kullanılır." },
        { title: "JAVASCRİPT", description: "JavaScript, web sayfalarına dinamiklik ve etkileşim kazandırmak için kullanılan bir programlama dilidir. Tarayıcı üzerinde çalışarak kullanıcıyla etkileşim kuran formlar, açılır menüler, animasyonlar ve gerçek zamanlı içerikler gibi özellikleri mümkün kılar. Modern JavaScript, modüler yapısı, olay yönetimi ve asenkron işlemleri desteklemesiyle birlikte oldukça güçlü ve esnek bir yapıya sahiptir. Hem frontend hem de backend geliştirmede kullanılabilir." },
        { title: "REACTJS", description: "React, kullanıcı arayüzleri oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir ve Facebook tarafından geliştirilmiştir. React, bileşen (component) tabanlı mimarisi sayesinde uygulamaların parçalarını modüler şekilde geliştirmenizi sağlar. Sanal DOM (Virtual DOM) teknolojisi sayesinde performansı yüksek uygulamalar geliştirilebilir. Geniş eklenti ekosistemi, React Router, Redux gibi yardımcı araçlarla birlikte güçlü bir frontend geliştirme ortamı sunar." },
        { title: "NODEJS", description: "Node.js, JavaScript’in sunucu tarafında çalışmasını sağlayan bir çalışma ortamıdır. Google’ın V8 JavaScript motorunu kullanır ve asenkron yapısı sayesinde yüksek performanslı web uygulamaları oluşturulmasını mümkün kılar. Node.js, özellikle API geliştirme, gerçek zamanlı uygulamalar ve mikro servis mimarileri için tercih edilir. JavaScript bilen geliştiricilerin backend geliştirme yapmasına olanak tanır." },
        { title: "EXPRESSJS", description: "Express.js, Node.js üzerinde çalışan minimalist ve esnek bir web uygulama çatısıdır (framework). RESTful API’ler oluşturmayı kolaylaştırır ve middleware (ara katman) mimarisi sayesinde isteklere yanıt verme sürecini kontrol etmeyi sağlar. Geliştiricilere basit bir yapı sunarken aynı zamanda özelleştirmeye de imkan tanır. Express, hızlı bir şekilde sunucu kurmak ve yönlendirmeler (routing) oluşturmak için yaygın olarak kullanılır." },
        { title: "MONGODB", description: "MongoDB, JSON benzeri dokümanları depolayan NoSQL bir veritabanıdır. Geleneksel tablo yapılı veritabanlarının aksine esnek bir veri modeli sunar, bu da projelere kolayca ölçeklenebilirlik ve esneklik kazandırır. MongoDB, özellikle hızlı geliştirme süreci, büyük veri kümelerini yönetme kabiliyeti ve Node.js ile entegrasyon kolaylığı nedeniyle modern web uygulamalarında sıkça tercih edilir." },
        { title: "FİREBASE", description: "Firebase, Google tarafından sunulan bulut tabanlı bir uygulama geliştirme platformudur. Gerçek zamanlı veritabanı, kimlik doğrulama, barındırma (hosting), analiz ve bildirim servisleri gibi birçok özelliği içerir. Özellikle mobil ve web uygulamaları için backend altyapısını hızlıca kurmak isteyen geliştiriciler tarafından tercih edilir. Firebase, küçük projelerden büyük ölçekli uygulamalara kadar geniş bir kullanım alanına sahiptir." },
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
                   >{element.explain} 
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

