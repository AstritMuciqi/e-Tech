// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import store from "../store";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQqxdYg62HLAhnI9a5wCbMF31AJ03CVJ8",
  authDomain: "e-tech-a48a8.firebaseapp.com",
  projectId: "e-tech-a48a8",
  storageBucket: "e-tech-a48a8.appspot.com",
  messagingSenderId: "699188588388",
  appId: "1:699188588388:web:e54dd9efd0c78b49f39471"
};

// Initialize Firebase
initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), (user) => {
    store.dispatch("fetchUser", user);
});
