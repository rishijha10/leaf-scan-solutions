// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0hIKjeGigj2V9DjbTOIiXhUlpzVTCius",
  authDomain: "leaf-scan-solutions.firebaseapp.com",
  projectId: "leaf-scan-solutions",
  storageBucket: "leaf-scan-solutions.appspot.com",
  messagingSenderId: "1076662037890",
  appId: "1:1076662037890:web:bf829f0f0424793ade339b",
  measurementId: "G-TZ7FYT45KM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
