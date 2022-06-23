// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApIp65DZmpMs2aXGRBI-UTAOWnXCCudiA",
  authDomain: "employee-app-d49b6.firebaseapp.com",
  projectId: "employee-app-d49b6",
  storageBucket: "employee-app-d49b6.appspot.com",
  messagingSenderId: "161234040133",
  appId: "1:161234040133:web:aa7dc5034334a9cd38fa2c",
  measurementId: "G-0MS7Q35K2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

