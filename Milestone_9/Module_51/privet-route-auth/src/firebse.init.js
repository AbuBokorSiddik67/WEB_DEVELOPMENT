// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQivPPr-oqPIIBh30AE-TA-Sp2kvX4dQg",
    authDomain: "privet-route-auth-a6fd2.firebaseapp.com",
    projectId: "privet-route-auth-a6fd2",
    storageBucket: "privet-route-auth-a6fd2.firebasestorage.app",
    messagingSenderId: "342326010274",
    appId: "1:342326010274:web:d26f157a2817fea57e52fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);