// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDl7H82RjIzJII5B2pvcDC2eJuAOf9idXc",
//   authDomain: "foodiesgalaxy-3cae2.firebaseapp.com",
//   projectId: "foodiesgalaxy-3cae2",
//   storageBucket: "foodiesgalaxy-3cae2.appspot.com",
//   messagingSenderId: "230657043655",
//   appId: "1:230657043655:web:86db6aba7e5b98879ae2e2"
// };

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY ,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN ,
  projectId:import.meta.env.VITE_PROJECT_ID ,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET ,
  messagingSenderId:import.meta.env.VITE_MESSAGEING_SENDER_ID ,
  appId:import.meta.env.VITE_APPID ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth