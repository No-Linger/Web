'use client'
import {initializeApp } from "firebase/app";
import { NEXT_PUBLIC_API_KEY,NEXT_PUBLIC_AUTH_DOMAIN,NEXT_PUBLIC_PROJECT_ID,NEXT_PUBLIC_BUCKET,NEXT_PUBLIC_MESSAGE_ID,NEXT_PUBLIC_APP_ID } from "./config";
import {initializeAuth,} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: NEXT_PUBLIC_API_KEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_BUCKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGE_ID,
  appId: NEXT_PUBLIC_APP_ID
};

// Initialize Firebase
export const Firebase_APP = initializeApp(firebaseConfig);
console.log(firebaseConfig)

const auth = initializeAuth(Firebase_APP)
export const authClient = auth;