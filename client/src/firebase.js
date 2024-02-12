// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-4dd75.firebaseapp.com",
  projectId: "real-estate-4dd75",
  storageBucket: "real-estate-4dd75.appspot.com",
  messagingSenderId: "897215255663",
  appId: "1:897215255663:web:7c4c1ae8c711e9afeaa99a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);