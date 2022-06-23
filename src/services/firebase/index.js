// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuLjz5dQ6pWmC6df8uLlVYrR1LVFe5Du8",
  authDomain: "partienda-8be56.firebaseapp.com",
  projectId: "partienda-8be56",
  storageBucket: "partienda-8be56.appspot.com",
  messagingSenderId: "113254954419",
  appId: "1:113254954419:web:1209050bc4c218b55287c6",
  measurementId: "G-63DY1C5RX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)