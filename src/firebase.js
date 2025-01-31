// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9JnFUmghPjBPPeRWsRHx0DWu76fmMfMg",
  authDomain: "authentication-a494e.firebaseapp.com",
  projectId: "authentication-a494e",
  storageBucket: "authentication-a494e.firebasestorage.app",
  messagingSenderId: "454623950574",
  appId: "1:454623950574:web:59acb98a1f996e51a0a5ff",
  measurementId: "G-PNMBQKVR9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
