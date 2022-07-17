// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQIA5yi1f0gjODLFB402U0a5BH5qZRzSM",
  authDomain: "infinite-user.firebaseapp.com",
  projectId: "infinite-user",
  storageBucket: "infinite-user.appspot.com",
  messagingSenderId: "393221053064",
  appId: "1:393221053064:web:1debd81dd92f1f16f3dd3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;