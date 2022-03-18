import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7iwDksJWxBqWFzXSfqG0n5doednN4oRE",
  authDomain: "expense-tracker-3e31a.firebaseapp.com",
  projectId: "expense-tracker-3e31a",
  storageBucket: "expense-tracker-3e31a.appspot.com",
  messagingSenderId: "190959305426",
  appId: "1:190959305426:web:8631f36311e125b0dbe30b",
  measurementId: "G-BLL5DPV9H3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

console.log("firebase instantiated, user.uid: ", auth.currentUser);

export { db, auth };
