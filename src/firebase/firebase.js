// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHr9-Ixv1duPGWj1ASn_R6Ua_lRt-LiMM",
  authDomain: "estore-a0844.firebaseapp.com",
  projectId: "estore-a0844",
  storageBucket: "estore-a0844.appspot.com",
  messagingSenderId: "428692194884",
  appId: "1:428692194884:web:181579cd29b36422a79e11",
  measurementId: "G-4Y80X43CE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
