import React from "react";
import firebase from "firebase";
import { auth } from "../firebase";
const SignIn = () => {
  const signingoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button onClick={signingoogle}>sign in google account</button>
    </div>
  );
};

export default SignIn;
