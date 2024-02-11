import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ChatRoom from "./ChatRoom";

const firebaseConfig = {
  apiKey: "AIzaSyA9XTWy8rBAYYM-BMWTVlJYmp0ieaCliI0",
  authDomain: "sagita-ffcc5.firebaseapp.com",
  projectId: "sagita-ffcc5",
  storageBucket: "sagita-ffcc5.appspot.com",
  messagingSenderId: "518705465297",
  appId: "1:518705465297:web:b2d7fc27e97d53457b42f0",
  measurementId: "G-58BQEDNG27",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function Signin() {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);

    navigate("/ChatRoom"); //after signing in, navigate to chatRoom
  };

  return (
    <>
      <span className="Note">
        Talk with friends anywhere. To get started just click sign in
      </span>
      <div className="signInButton">
        <button className="signInBtn" onClick={signInWithGoogle}>
          SignIn
        </button>
      </div>
    </>
  );
}
