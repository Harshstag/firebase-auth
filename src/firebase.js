import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKM6zF8GE2lZBBWSr5XXXXXXXXXXXX",
  authDomain: "fir-auth-XXXXX.firebaseapp.com",
  projectId: "fir-auth-XXXXX",
  storageBucket: "fir-auth-XXXXX.appspot.com",
  messagingSenderId: "XXXXX",
  appId: "1:157658677092:web:4d963566062XXXXXXXXX",
  measurementId: "G-XXXXXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
