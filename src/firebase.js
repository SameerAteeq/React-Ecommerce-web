import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "sneakers-web.firebaseapp.com",
    projectId: "sneakers-web",
    storageBucket: "sneakers-web.appspot.com",
    messagingSenderId: "324071961599",
    appId: "1:324071961599:web:f45a516184559a6df0adca"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();