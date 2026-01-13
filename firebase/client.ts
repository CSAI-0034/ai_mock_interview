// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh9wbUZZhiPKVfS962BT-axVwuDr2qo3w",
  authDomain: "prepwise-aea39.firebaseapp.com",
  projectId: "prepwise-aea39",
  storageBucket: "prepwise-aea39.firebasestorage.app",
  messagingSenderId: "289813701200",
  appId: "1:289813701200:web:9ce2c4438a65ea53532755",
  measurementId: "G-RJRQM1VW5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);