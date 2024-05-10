// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl7H82RjIzJII5B2pvcDC2eJuAOf9idXc",
  authDomain: "foodiesgalaxy-3cae2.firebaseapp.com",
  projectId: "foodiesgalaxy-3cae2",
  storageBucket: "foodiesgalaxy-3cae2.appspot.com",
  messagingSenderId: "230657043655",
  appId: "1:230657043655:web:86db6aba7e5b98879ae2e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth