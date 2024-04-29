// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJLYT0xwyIyA4UuLlXNHOgIELJEWX4ExQ",
  authDomain: "easypc-58ab8.firebaseapp.com",
  projectId: "easypc-58ab8",
  storageBucket: "easypc-58ab8.appspot.com",
  messagingSenderId: "249383425204",
  appId: "1:249383425204:web:70ce7dd3d3ac19dce9f3e1",
  measurementId: "G-DEWXQ8SHQ7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
