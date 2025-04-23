// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGqI-bkhWf1fw3HEEj3uIP8_yxZHa0uEg",
  authDomain: "testproject2025-1-g1.firebaseapp.com",
  projectId: "testproject2025-1-g1",
  storageBucket: "testproject2025-1-g1.firebasestorage.app",
  messagingSenderId: "984428913533",
  appId: "1:984428913533:web:c42b2a83b1c2d95eaca214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;