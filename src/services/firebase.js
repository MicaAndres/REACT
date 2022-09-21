// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChJ_SXitGGXMDZzsv46b0Oxnqe9_PB6ng",
  authDomain: "cocinitas-de-madera.firebaseapp.com",
  projectId: "cocinitas-de-madera",
  storageBucket: "cocinitas-de-madera.appspot.com",
  messagingSenderId: "1001662415138",
  appId: "1:1001662415138:web:d3742f9f4b050ca65f257b",
  measurementId: "G-TD69E33JYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

export default db;