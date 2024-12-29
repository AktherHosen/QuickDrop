import { useState, useEffect, createContext } from "react";
import { app } from "../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = () => {
  return <div></div>;
};

export default AuthProvider;
