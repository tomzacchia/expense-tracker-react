import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "~/utils/firebase";

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
  return signOut(auth);
}

function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export { login, logout, signup, resetPassword };
