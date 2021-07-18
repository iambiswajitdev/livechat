import React, { useState } from "react";
import { dataBase, auth } from "../firebase";
import firebase from "firebase";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await dataBase.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            className="input"
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="sendMss" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
