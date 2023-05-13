
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
export const analytics = getAnalytics(app);