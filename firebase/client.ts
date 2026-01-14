// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh9wbUZZhiPKVfS962BT-axVwuDr2qo3w",
  authDomain: "prepwise-aea39.firebaseapp.com",
  projectId: "prepwise-aea39",
  storageBucket: "prepwise-aea39.firebasestorage.app",
  messagingSenderId: "289813701200",
  appId: "1:289813701200:web:9ce2c4438a65ea53532755",
  measurementId: "G-RJRQM1VW5F"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);