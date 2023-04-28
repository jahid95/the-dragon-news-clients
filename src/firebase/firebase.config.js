// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8sEsN_lrG1lRIfPM61zWciqEU5yjlhWo",
  authDomain: "the-dragon-news-af712.firebaseapp.com",
  projectId: "the-dragon-news-af712",
  storageBucket: "the-dragon-news-af712.appspot.com",
  messagingSenderId: "717676595812",
  appId: "1:717676595812:web:41f2c429c573d97048ed71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app