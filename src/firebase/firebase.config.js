// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXZCbI1VbvxISpfvlcTQZkDxjfHcvvRE0",
  authDomain: "email-password-auth-ded31.firebaseapp.com",
  projectId: "email-password-auth-ded31",
  storageBucket: "email-password-auth-ded31.appspot.com",
  messagingSenderId: "249135059175",
  appId: "1:249135059175:web:ce7f20ad2bd7410b4f9242",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;