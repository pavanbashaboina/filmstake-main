import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "filmstake-1f257.firebaseapp.com",
  projectId: "filmstake-1f257",
  storageBucket: "filmstake-1f257.firebasestorage.app",
  messagingSenderId: "586049938152",
  appId: "1:586049938152:web:c995033e8b01761b971f5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { app, auth, provider, signInWithPopup }