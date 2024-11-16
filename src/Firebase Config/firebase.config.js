// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaiv1g9ezik8iRCJQaQzBgNKESNbiZzXo",
  authDomain: "dragon-news-9b840.firebaseapp.com",
  projectId: "dragon-news-9b840",
  storageBucket: "dragon-news-9b840.firebasestorage.app",
  messagingSenderId: "663154164863",
  appId: "1:663154164863:web:e153f1709269d1038f2b4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
