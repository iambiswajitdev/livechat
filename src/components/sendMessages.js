import React, { useState } from "react";
import { dataBase, auth } from "../firebase";
import firebase from "firebase";
const SendMessages = () => {
  const [messg, setMessg] = useState("");
  const sendMassg = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await dataBase.collection("messages").add({
      text: messg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessg("");
  };
  return (
    <div>
      <form onSubmit={sendMassg}>
        <input
          value={messg}
          type="text"
          onChange={(e) => setMessg(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default SendMessages;
