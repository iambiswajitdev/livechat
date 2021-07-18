import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvMHvWwJQTE3vtHqj1uV6f8X0u20bxYtM",
  authDomain: "livechat-edc49.firebaseapp.com",
  projectId: "livechat-edc49",
  storageBucket: "livechat-edc49.appspot.com",
  messagingSenderId: "121897113861",
  appId: "1:121897113861:web:eb079ffd3bf51f6520ff6c",
  measurementId: "G-N6NL04ER09",
});

const dataBase = firebaseApp.firestore();
const auth = firebase.auth();

export { dataBase, auth };
