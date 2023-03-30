// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXCEcW6aSCY_bvoovIQ8VsTSJV7BEZEfM",
  authDomain: "henry-college.firebaseapp.com",
  projectId: "henry-college",
  storageBucket: "henry-college.appspot.com",
  messagingSenderId: "566862601551",
  appId: "1:566862601551:web:b98c0b5f943b919849393a",
//   measurementId: "G-3M5LCZN8MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);