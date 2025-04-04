// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCntguRgT-MFO4WmeQ_fXAPX3rbdyQRTE",
  authDomain: "realtime-meet.firebaseapp.com",
  projectId: "realtime-meet",
  storageBucket: "realtime-meet.firebasestorage.app",
  messagingSenderId: "326118338874",
  appId: "1:326118338874:web:128fd1c86a73ac345fa003",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
