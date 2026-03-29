// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrYWUlI4QZEAb-3q_G7ypIRRWKie5JecM",
  authDomain: "todo-8678c.firebaseapp.com",
  databaseURL: "https://todo-8678c-default-rtdb.firebaseio.com",
  projectId: "todo-8678c",
  storageBucket: "todo-8678c.firebasestorage.app",
  messagingSenderId: "1022607308094",
  appId: "1:1022607308094:web:2cb0cfb369d39c1b93686f",
  measurementId: "G-SQM3PBJ11Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
