// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEq_DGQfp6pvPD77wp8bxQL8hxWCLbR0w",
  authDomain: "meet-4-30.firebaseapp.com",
  projectId: "meet-4-30",
  storageBucket: "meet-4-30.firebasestorage.app",
  messagingSenderId: "115751097017",
  appId: "1:115751097017:web:b519c93f3b3b6b1c048168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
 export {app,auth}