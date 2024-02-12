import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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

  const SiginWithFaceBook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in successfully
        console.log("Facebook sign-in success:", result.user);
        navigate("/ChatRoom"); // Navigate to ChatRoom after successful sign-in
      })
      .catch((error) => {
        // Handle errors
        console.error("Facebook sign-in error:", error.message);
      });
  };
  return (
    <>
      <div>
        <p></p>
      </div>
      <div className=".Div-signInButton-fb">
        <button className="signInBtn-for-fb" onClick={SiginWithFaceBook}>
          Continue with Facebook
        </button>
      </div>
    </>
  );
}
