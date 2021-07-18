import React from "react";
import firebase from "firebase";
import { auth } from "../firebase.js";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <button className="signIn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
}

export default SignIn;
