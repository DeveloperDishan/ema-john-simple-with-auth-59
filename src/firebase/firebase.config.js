// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANu1-5c3fTKqT0pZt2YDwEXLm6f-wSc-I",
    authDomain: "ema-john-simple-a91c7.firebaseapp.com",
    projectId: "ema-john-simple-a91c7",
    storageBucket: "ema-john-simple-a91c7.appspot.com",
    messagingSenderId: "837480611166",
    appId: "1:837480611166:web:e3f065f8302ee6fb0763cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app