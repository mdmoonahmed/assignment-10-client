// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnfPrMyWbHUkKPzvgfAXWKmwwIlBbdSDA",
  authDomain: "rent-wheel-6eff7.firebaseapp.com",
  projectId: "rent-wheel-6eff7",
  storageBucket: "rent-wheel-6eff7.firebasestorage.app",
  messagingSenderId: "9521847109",
  appId: "1:9521847109:web:7d99f0279deb9a8cb97c2c",
  measurementId: "G-MLSXEPZ28V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)