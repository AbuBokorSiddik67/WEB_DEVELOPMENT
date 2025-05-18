// DO NOT SHARE GITHUB OR LOCAL DERECTORY.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKm4QqseK3L2ZZZdcpUoB4EysDiahWSXs",
  authDomain: "my-firebase-22391.firebaseapp.com",
  projectId: "my-firebase-22391",
  storageBucket: "my-firebase-22391.firebasestorage.app",
  messagingSenderId: "332960953580",
  appId: "1:332960953580:web:fc6412da2cf446a3bf21c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);