
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBD1aeMQYzhfghcViiy-e_bLV-PxriMr2s",
    authDomain: "fir-test1-6227f.firebaseapp.com",
    projectId: "fir-test1-6227f",
    storageBucket: "fir-test1-6227f.appspot.com",
    messagingSenderId: "1095274831066",
    appId: "1:1095274831066:web:82e2ef32c226d4eeeb19e3",
    measurementId: "G-EE6WGQCYMQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth();

const email = document.querySelector("#email");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

const submitBtn = document.querySelector("#submit");


createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });





