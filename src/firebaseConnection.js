// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_LhtVOiqUpD5JbvrpZe9gfVgS5l3esHI",
  authDomain: "banco-dados-react-268a7.firebaseapp.com",
  projectId: "banco-dados-react-268a7",
  storageBucket: "banco-dados-react-268a7.appspot.com",
  messagingSenderId: "511667505470",
  appId: "1:511667505470:web:2baccb8447eda60777446f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };