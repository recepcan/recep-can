import { FaCss3, FaReact } from 'react-icons/fa'
import { ImGithub, ImHtmlFive2 } from 'react-icons/im'
import { SiExpress, SiTailwindcss } from 'react-icons/si'
import { RiJavascriptFill } from 'react-icons/ri'
import { TbBrandRedux, TbBrandTypescript } from 'react-icons/tb'
import { DiNodejs } from 'react-icons/di'
import { BiLogoMongodb } from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'
import { IoLogoFirebase } from "react-icons/io5";
import { color } from 'framer-motion'

export const elements=[
    {
        name:"HTML",
        icon:<ImHtmlFive2 color='orangered'  /> ,
        explain:"HTML, web sayfalarının temel yapısını oluşturmak için kullanılan işaretleme dilidir. Web tarayıcıları, HTML kodlarını okuyarak kullanıcıya görsel olarak anlamlı bir sayfa sunar. Paragraflar, başlıklar, bağlantılar, görseller ve tablolar gibi içeriklerin yapısını tanımlamak için kullanılır. Her öğe etiketler ile belirtilir ve bu etiketler içeriklerin ne olduğunu belirtir. HTML, web geliştirme sürecinin ilk adımıdır ve diğer teknolojilerle birlikte kullanılarak işlevsel siteler oluşturulur. " ,
       

    },
    {
        name:"CSS",
        icon:<FaCss3 color='blue'  /> ,
         explain:"CSS, HTML ile oluşturulan yapıya stil kazandırmak için kullanılan bir biçimlendirme dilidir. Web sayfalarının renklerini, yazı tiplerini, düzenlerini ve geçiş efektlerini tanımlayarak kullanıcı deneyimini iyileştirir. CSS sayesinde aynı HTML yapısı, farklı görünümlerle sunulabilir. Sayfa düzenlerini daha esnek hale getirmek için Flexbox ve Grid gibi sistemler sunar. Genellikle HTML dosyasına bağlı olarak veya doğrudan içinde kullanılır.",
        
    },
    {
        name:"TAİLWİNDCSS",
        icon:<SiTailwindcss  color='blue' />,
         explain:"Tailwind CSS, utility-first (yardımcı sınıf temelli) yaklaşımıyla geliştirilen modern bir CSS framework’üdür. Önceden tanımlı sınıflar aracılığıyla doğrudan HTML etiketleri üzerinde stil vermeye olanak tanır. Bu sayede ayrı CSS dosyaları yazmadan, hızlı ve esnek bir şekilde özelleştirilmiş arayüzler oluşturulabilir. Geliştiricilere kontrol ve hız kazandıran Tailwind, mobil uyumlu ve duyarlı tasarımlar oluşturmak için idealdir.",
        
    },
    {
        name:"JAVASCRİPT",
        icon:<RiJavascriptFill  color='orange' />,
         explain:"JavaScript, web sayfalarına dinamiklik ve etkileşim kazandırmak için kullanılan bir programlama dilidir. Tarayıcı üzerinde çalışarak kullanıcıyla etkileşim kuran formlar, açılır menüler, animasyonlar ve gerçek zamanlı içerikler gibi özellikleri mümkün kılar. Modern JavaScript, modüler yapısı, olay yönetimi ve asenkron işlemleri desteklemesiyle birlikte oldukça güçlü ve esnek bir yapıya sahiptir. Hem frontend hem de backend geliştirmede kullanılabilir." ,
        
    },
    {
        name:"TYPESCRİPT",
        icon:<TbBrandTypescript  color='blue' />,
         explain:'TypeScript, Microsoft tarafından geliştirilen ve JavaScript’i temel alan, statik tür denetimi (type checking) sağlayan bir programlama dilidir. JavaScript’in tüm özelliklerini içerirken, üzerine tip sistemi, arayüzler (interfaces), jenerikler (generics) ve güçlü IDE desteği gibi özellikler ekler. TypeScript, büyük ve ölçeklenebilir projelerde hata oranını azaltmak, kodun okunabilirliğini ve bakımını artırmak için tercih edilir. Derlenerek (transpile edilerek) JavaScript’e dönüşür, bu sayede tüm tarayıcılarda çalışabilir. React ve Node.js gibi teknolojilerle sıkça birlikte kullanılır.',
        
    },
    {
        name:"REACT.JS",
        icon:<FaReact color='blue'  />,
         explain:"React, kullanıcı arayüzleri oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir ve Facebook tarafından geliştirilmiştir. React, bileşen (component) tabanlı mimarisi sayesinde uygulamaların parçalarını modüler şekilde geliştirmenizi sağlar. Sanal DOM (Virtual DOM) teknolojisi sayesinde performansı yüksek uygulamalar geliştirilebilir. Geniş eklenti ekosistemi, React Router, Redux gibi yardımcı araçlarla birlikte güçlü bir frontend geliştirme ortamı sunar." ,
       
    },
    {
        name:"REDUX.JS",
        icon:<TbBrandRedux  color='purple' />,
         explain:'Redux, JavaScript uygulamalarında merkezi bir durum yönetimi (state management) sağlayan bir kütüphanedir. Genellikle React ile birlikte kullanılır, ancak diğer UI kütüphaneleriyle de entegre olabilir. Redux, tüm uygulama durumunu tek bir global "store" içinde tutar ve bu durumu sadece "actions" ve "reducers" aracılığıyla günceller. Bu yapı, büyük uygulamalarda veri akışını kolayca kontrol etmeyi ve uygulama durumunu tahmin edilebilir hale getirmeyi sağlar. Özellikle bileşenler arası karmaşık veri geçişlerinin olduğu projelerde büyük avantaj sunar.',
        
    },
    {
        name:"NODE.JS",
        icon:<DiNodejs color='green'  />,
         explain:"Node.js, JavaScript’in sunucu tarafında çalışmasını sağlayan bir çalışma ortamıdır. Google’ın V8 JavaScript motorunu kullanır ve asenkron yapısı sayesinde yüksek performanslı web uygulamaları oluşturulmasını mümkün kılar. Node.js, özellikle API geliştirme, gerçek zamanlı uygulamalar ve mikro servis mimarileri için tercih edilir. JavaScript bilen geliştiricilerin backend geliştirme yapmasına olanak tanır." ,
        
    },
    {
        name:"EXPRESS.JS",
        icon:<SiExpress  color='gray' />,
         explain:"Express.js, Node.js üzerinde çalışan minimalist ve esnek bir web uygulama çatısıdır (framework). RESTful API’ler oluşturmayı kolaylaştırır ve middleware (ara katman) mimarisi sayesinde isteklere yanıt verme sürecini kontrol etmeyi sağlar. Geliştiricilere basit bir yapı sunarken aynı zamanda özelleştirmeye de imkan tanır. Express, hızlı bir şekilde sunucu kurmak ve yönlendirmeler (routing) oluşturmak için yaygın olarak kullanılır.",
        color:'gray'
    },
    {
        name:"MONGO.DB",
        icon:<BiLogoMongodb  color='green' />,
         explain:"MongoDB, JSON benzeri dokümanları depolayan NoSQL bir veritabanıdır. Geleneksel tablo yapılı veritabanlarının aksine esnek bir veri modeli sunar, bu da projelere kolayca ölçeklenebilirlik ve esneklik kazandırır. MongoDB, özellikle hızlı geliştirme süreci, büyük veri kümelerini yönetme kabiliyeti ve Node.js ile entegrasyon kolaylığı nedeniyle modern web uygulamalarında sıkça tercih edilir." ,
        
    },
    
    {
        name:"FIREBASE",
        icon:<IoLogoFirebase color='orange'/>,
        explain:"Firebase, Google tarafından sunulan bulut tabanlı bir uygulama geliştirme platformudur. Gerçek zamanlı veritabanı, kimlik doğrulama, barındırma (hosting), analiz ve bildirim servisleri gibi birçok özelliği içerir. Özellikle mobil ve web uygulamaları için backend altyapısını hızlıca kurmak isteyen geliştiriciler tarafından tercih edilir. Firebase, küçük projelerden büyük ölçekli uygulamalara kadar geniş bir kullanım alanına sahiptir." ,
        
    },
    {
        name:"GİT",
        icon:<BsGit  color='red' />,
         explain:'Versiyon kontrol sistemi. Kod değişikliklerini izler, geri alınabilir ve takım çalışmasını kolaylaştırır.',
        
    },
    {
        name:"GİTHUB",
        icon:<ImGithub  color='purple' />,
         explain:'Kod depolama ve paylaşım platformu. Açık kaynak projeler ve işbirliği için kullanılır.',
        
    },
    
   ]