// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhdsLrytFNoeXLEkxdajlY6UIBo1jZNMs",
    authDomain: "ayra-fitness.firebaseapp.com",
    projectId: "ayra-fitness",
    storageBucket: "ayra-fitness.appspot.com",
    messagingSenderId: "913727787426",
    appId: "1:913727787426:web:94be8bc2999b58233462fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;