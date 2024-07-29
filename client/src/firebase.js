// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personal-blog-recep-can.firebaseapp.com",
  projectId: "personal-blog-recep-can",
  storageBucket: "personal-blog-recep-can.appspot.com",
  messagingSenderId: "302108299974",
  appId: "1:302108299974:web:eb7800f67d55a3d3dabdc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);