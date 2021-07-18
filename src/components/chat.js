import React, { useState, useEffect } from "react";
import { auth, dataBase } from "../firebase";
import SendMessages from "./sendMessages";
import SignOut from "./signOut";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    dataBase
      .collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((docs) => docs.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="messges">
        {messages.map(({ id, text, photoURl, uid }) => (
          <div>
            <div
              key={id}
              className={`messg ${
                uid === auth.currentUser.uid ? "sent" : "reseve"
              }`}
            >
              <img src={photoURl} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessages />
    </div>
  );
};

export default Chat;
