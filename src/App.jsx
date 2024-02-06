import { initializeApp } from "firebase/app"; //initalizer
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"; //auth
//importing hooks from that will make firebase possible to work with react
import { useAuthState } from "react-firebase-hooks/auth";

//IMPORTS FROM COMPONENET
import Signin from "../conmponents/Signin";
import SignOut from "../conmponents/Signout";
import ChatRoom from "../conmponents/ChatRoom";
import Header from "../conmponents/Header";
const firebaseConfig = {
  apiKey: "AIzaSyA9XTWy8rBAYYM-BMWTVlJYmp0ieaCliI0",
  authDomain: "sagita-ffcc5.firebaseapp.com",
  projectId: "sagita-ffcc5",
  storageBucket: "sagita-ffcc5.appspot.com",
  messagingSenderId: "518705465297",
  appId: "1:518705465297:web:b2d7fc27e97d53457b42f0",
  measurementId: "G-58BQEDNG27",
};
//initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function App() {
  const [user] = useAuthState(auth); // represents the current authentication state of the user

  return (
    <>
      <div className="App">
        <header>
          <SignOut />
          {/* <Header /> */}
        </header>
        <div>
          <section> {user ? <ChatRoom /> : <Signin />} </section>
        </div>
      </div>
    </>
  );
} //all functions should be inside this cury bress
