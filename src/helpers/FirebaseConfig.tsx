
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCvuKYPATDFPzSXiwulrTmhGGwp4CeE908",
    authDomain: "playgreen-test.firebaseapp.com",
    projectId: "playgreen-test",
    storageBucket: "playgreen-test.appspot.com",
    messagingSenderId: "748183784389",
    appId: "1:748183784389:web:db47e2a97fbc5e2cc999ac",
    measurementId: "G-Y2CZET6B0G",
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
console.log("app", app)
