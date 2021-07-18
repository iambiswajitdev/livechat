import React from "react";
import { auth } from "../firebase";

const SignOut = () => {
  return (
    <div>
      <button onClick={() => auth.signOut()}>signout</button>
    </div>
  );
};

export default SignOut;
