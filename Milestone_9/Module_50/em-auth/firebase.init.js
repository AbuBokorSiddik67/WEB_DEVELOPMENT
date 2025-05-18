// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Zu-gH3Eoqh7-PyVG1wJsrfnU1WrYDq0",
  authDomain: "em-auth-b0f4d.firebaseapp.com",
  projectId: "em-auth-b0f4d",
  storageBucket: "em-auth-b0f4d.firebasestorage.app",
  messagingSenderId: "336281202979",
  appId: "1:336281202979:web:68bfec01fb366baae79c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);