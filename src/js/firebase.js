// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAul-XjjApq9-y7EsnDGqC5Y9a7k7QBUks",
  authDomain: "dashboard-for-data-entry.firebaseapp.com",
  projectId: "dashboard-for-data-entry",
  storageBucket: "dashboard-for-data-entry.appspot.com",
  messagingSenderId: "278053965553",
  appId: "1:278053965553:web:6526966505513a118e6350",
  measurementId: "G-NGNPZ92TDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
