// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRI2QBl5Yj3diBJB-WpiotANXuFmuHQeI",
  authDomain: "firestore-meet.firebaseapp.com",
  projectId: "firestore-meet",
  storageBucket: "firestore-meet.firebasestorage.app",
  messagingSenderId: "863251253261",
  appId: "1:863251253261:web:f52f6151124963977ced44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
