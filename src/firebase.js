import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKM6zF8GE2lZBBWSr5hloWIgbsCrr5Od4",
  authDomain: "fir-auth-69832.firebaseapp.com",
  projectId: "fir-auth-69832",
  storageBucket: "fir-auth-69832.appspot.com",
  messagingSenderId: "157658677092",
  appId: "1:157658677092:web:4d9635660622c147cb0471",
  measurementId: "G-Y2K6T3TJ7C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
