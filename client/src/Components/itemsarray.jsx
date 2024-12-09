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
        explain:'Web sayfalarının iskeletini oluşturur. Metin, görsel, bağlantı gibi temel içerikleri tanımlar.',
       

    },
    {
        name:"CSS",
        icon:<FaCss3 color='blue'  /> ,
         explain:'Web sayfalarının tasarımını ve düzenini belirler. Renk, yazı tipi ve yerleşimi yönetir.',
        
    },
    {
        name:"TAİLWİNDCSS",
        icon:<SiTailwindcss  color='blue' />,
         explain:'Kullanılabilir sınıflar sunan bir CSS framework’ü. Hızlı ve esnek bir şekilde özelleştirilebilir tasarımlar oluşturur.',
        
    },
    {
        name:"JAVASCRİPT",
        icon:<RiJavascriptFill  color='orange' />,
         explain:'Web sayfalarına etkileşim ve dinamiklik katar. Tarayıcı üzerinde çalışan bir programlama dilidir.',
        
    },
    {
        name:"REACT.JS",
        icon:<FaReact color='blue'  />,
         explain:'Kullanıcı arayüzleri geliştirmek için kullanılan bir JavaScript kütüphanesi. Bileşen tabanlı yapısıyla öne çıkar.',
       
    },
    {
        name:"REDUX.JS",
        icon:<TbBrandRedux  color='purple' />,
         explain:'React ve diğer kütüphanelerle birlikte kullanılan bir durum yönetim aracıdır. Verileri merkezi bir yerde saklar.',
        
    },
    {
        name:"NODE.JS",
        icon:<DiNodejs color='green'  />,
         explain:'JavaScript’i tarayıcı dışında, sunucu tarafında çalıştırmayı sağlayan bir çalışma ortamıdır.',
        
    },
    {
        name:"EXPRESS.JS",
        icon:<SiExpress  color='gray' />,
         explain:'Node.js ile hızlı ve kolay web sunucuları oluşturmayı sağlayan minimalist bir framework.',
        color:'gray'
    },
    {
        name:"MONGO.DB",
        icon:<BiLogoMongodb  color='green' />,
         explain:'NoSQL tabanlı bir veritabanıdır. Esnek yapısıyla JSON benzeri belgelerle veri saklar.',
        
    },
    {
        name:"TYPESCRİPT",
        icon:<TbBrandTypescript  color='blue' />,
         explain:'JavaScript’in özelliklerini genişleten bir dil. Statik tür desteğiyle hataları önler ve kodu daha güvenilir kılar.',
        
    },
    {
        name:"FIREBASE",
        icon:<IoLogoFirebase color='orange'/>,
        explain:'Google’ın sunduğu bir platform. Gerçek zamanlı veritabanı, kimlik doğrulama, depolama ve barındırma hizmetleri sağlar.',
        
    },
    {
        name:"GİTHUB",
        icon:<ImGithub  color='purple' />,
         explain:'Kod depolama ve paylaşım platformu. Açık kaynak projeler ve işbirliği için kullanılır.',
        
    },
    {
        name:"GİT",
        icon:<BsGit  color='red' />,
         explain:'Versiyon kontrol sistemi. Kod değişikliklerini izler, geri alınabilir ve takım çalışmasını kolaylaştırır.',
        
    },
   ]