// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzluWpn-rT4ESzwdmavmdmwsc28mnuQjc",
  authDomain: "safepass-wallet-cc314.firebaseapp.com",
  projectId: "safepass-wallet-cc314",
  storageBucket: "safepass-wallet-cc314.appspot.com",
  messagingSenderId: "355388513642",
  appId: "1:355388513642:web:8617b9dfaba48d58ef5913"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { signInWithPopup, signOut };
