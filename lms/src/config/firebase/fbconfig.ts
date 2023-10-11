// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcMvD_BtUUfp9j1GLQqxHwBBc20eycM6Q",
  authDomain: "learning-management-syst-3eab8.firebaseapp.com",
  projectId: "learning-management-syst-3eab8",
  storageBucket: "learning-management-syst-3eab8.appspot.com",
  messagingSenderId: "58702181582",
  appId: "1:58702181582:web:53b9df50585a8341874c9f",
  measurementId: "G-S537G9DZHZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);