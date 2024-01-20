import { initializeApp } from "firebase/app"; //initalizer
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"; //auth
import { collection, getFirestore, orderBy, query } from "firebase/firestore"; //database

//importing hooks from that will make firebase possible to work with react
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

//IMPORTS FROM COMPONENET
import Signin from "../conmponents/Signin";
import SignOut from "../conmponents/Signout";
import ChatRoom from "../conmponents/ChatRoom";

const firebaseConfig = {
  apiKey: "AIzaSyD8i19mGZh7ZVqv5e5D7bHgrWECVO6e2go",
  authDomain: "realtime-d0317.firebaseapp.com",
  projectId: "realtime-d0317",
  storageBucket: "realtime-d0317.appspot.com",
  messagingSenderId: "451790034302",
  appId: "1:451790034302:web:2001c5c420cfc0d1df0f2f",
  measurementId: "G-8DJMD56PHS",
};
//initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function App() {
  const [user] = useAuthState(auth); // represents the current authentication state of the user
  return (
    <>
      <h1>Sagita </h1>
      <div>
        <header>
          <section>
            {" "}
            <SignOut />{" "}
          </section>
        </header>

        <div>
          {/* if user is authenticated show chatRoom otherwise show signIn */}
          <section> {user ? <ChatRoom /> : <Signin />} </section>
        </div>
      </div>
    </>
  );

  <ChatRoom />;
} //all functions should be inside this cury bress
