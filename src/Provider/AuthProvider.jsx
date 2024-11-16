import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase Config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const updateUserProfile = (data) => {
    updateProfile(auth.currentUser, data);
  };

  const authInfo = {
    createUser,
    signInUser,
    signOutUser,
    user,
    setUser,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
