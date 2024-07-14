// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYtUxqD8D7Ja_gOvyJXIHaLkAcKI_ROHg",
  authDomain: "genius-clone-fd706.firebaseapp.com",
  projectId: "genius-clone-fd706",
  storageBucket: "genius-clone-fd706.appspot.com",
  messagingSenderId: "724692428571",
  appId: "1:724692428571:web:3ddbcbe0f9d43ef90a55be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)