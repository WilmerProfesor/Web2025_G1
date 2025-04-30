// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYP-bAqBQ_wu3uNgmxYe_Vop8fFyXRQys",
  authDomain: "test-2025-g1.firebaseapp.com",
  projectId: "test-2025-g1",
  storageBucket: "test-2025-g1.firebasestorage.app",
  messagingSenderId: "812749662650",
  appId: "1:812749662650:web:d79088791dbacd91629583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;