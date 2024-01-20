import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8i19mGZh7ZVqv5e5D7bHgrWECVO6e2go",
  authDomain: "realtime-d0317.firebaseapp.com",
  projectId: "realtime-d0317",
  storageBucket: "realtime-d0317.appspot.com",
  messagingSenderId: "451790034302",
  appId: "1:451790034302:web:2001c5c420cfc0d1df0f2f",
  measurementId: "G-8DJMD56PHS",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function Signin() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="signInButton" onClick={signInWithGoogle}>
        SignInWith Google
      </button>
    </>
  );
}
