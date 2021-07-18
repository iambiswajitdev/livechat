import "./assets/css/style.css";
import Chat from "./components/chat";
import SignIn from "./components/signIn";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="main">{user ? <Chat /> : <SignIn />}</div>
    </>
  );
}

export default App;
