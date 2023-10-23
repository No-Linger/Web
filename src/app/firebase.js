import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe9-zrufJrqYRvDFJJPiMYsxtxjPdlOOo",
  authDomain: "next-auth-username-passw-ba997.firebaseapp.com",
  projectId: "next-auth-username-passw-ba997",
  storageBucket: "next-auth-username-passw-ba997.appspot.com",
  messagingSenderId: "88302614581",
  appId: "1:88302614581:web:a5d6569798fb23c63e197c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }