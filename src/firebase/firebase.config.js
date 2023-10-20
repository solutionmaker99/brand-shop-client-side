// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrXl94StdFHPdctb8L-JznIYlQV1ZmJ1c",
  authDomain: "brand-shop-assignment-b9109.firebaseapp.com",
  projectId: "brand-shop-assignment-b9109",
  storageBucket: "brand-shop-assignment-b9109.appspot.com",
  messagingSenderId: "942758207950",
  appId: "1:942758207950:web:08516bfcb6ffd22b75cb9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
