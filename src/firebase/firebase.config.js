// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJWNHaYGgq8C4qY64VN8H_-2vO2pbPc4U",
  authDomain: "real-estate-96953.firebaseapp.com",
  projectId: "real-estate-96953",
  storageBucket: "real-estate-96953.appspot.com",
  messagingSenderId: "952444146030",
  appId: "1:952444146030:web:419620bc76f07c4bdab17f",
  measurementId: "G-D06BDXV4TZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
