// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDxjwjjg9ImWNaTniHmx6CAh3j1GL-HLM",
  authDomain: "coffee-store-app-1cc45.firebaseapp.com",
  projectId: "coffee-store-app-1cc45",
  storageBucket: "coffee-store-app-1cc45.firebasestorage.app",
  messagingSenderId: "963071668843",
  appId: "1:963071668843:web:bbb8f0d1c7aa4ec8f0372e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

