import React from "react";
import { auth } from "../firebase.js";
// import { photoURL } from "../components/Chat";
function SignOut() {
  return (
    <div className="signHead">
      <div>{/* <img src={photoURL} alt="" /> */}</div>
      <button className="signout" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
