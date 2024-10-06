import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDKH0aB0qkqlQa2EQw_ALRpbK740tu-RGk",
  authDomain: "blog-98e65.firebaseapp.com",
  projectId: "blog-98e65",
  storageBucket: "blog-98e65.appspot.com",
  messagingSenderId: "903489887112",
  appId: "1:903489887112:web:db985ea9ae02092134783d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, fireDb, auth, storage };
