// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7DkcG37pjmvB5jzh2q0qDqLsVyFMFZCs",
  authDomain: "car-doctor-3af10.firebaseapp.com",
  projectId: "car-doctor-3af10",
  storageBucket: "car-doctor-3af10.appspot.com",
  messagingSenderId: "134863662014",
  appId: "1:134863662014:web:da855ab07371ce5178e7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;

