// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByvuoW3AOZQax-FkgEzgkkcf6H6JSOkcE",
  authDomain: "login-auth-a4401.firebaseapp.com",
  projectId: "login-auth-a4401",
  storageBucket: "login-auth-a4401.appspot.com", // login-auth-a4401.firebasestorage.app
  messagingSenderId: "680999547360",
  appId: "1:680999547360:web:6d55097b442369b8cc7b85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
