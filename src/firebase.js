// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCc-IxIzu51wurLxnZNkr5K_ljHp2TBxwo",
    authDomain: "swiftship-5f120.firebaseapp.com",
    projectId: "swiftship-5f120",
    storageBucket: "swiftship-5f120.appspot.com",
    messagingSenderId: "1081723974411",
    appId: "1:1081723974411:web:5e36da9dce40283e84280e"
};
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
