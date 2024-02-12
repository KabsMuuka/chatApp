import { initializeApp } from "firebase/app"; //initalizer
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"; //auth
//importing hooks from that will make firebase possible to work with react
import { useAuthState } from "react-firebase-hooks/auth";

//IMPORTS FROM COMPONENET
import SiginWithGoogle from "../conmponents/SiginWithGoogle";
import SignInWithFacebook from "../conmponents/SiginWithFaceBook";
import ChatRoom from "../conmponents/ChatRoom";
import Header from "../conmponents/Header";
import Profile from "../conmponents/Profile";

import { Routes, Route } from "react-router-dom";

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
        <header>{user ? <Header /> : " "}</header>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <ChatRoom />
              ) : (
                <>
                  <SiginWithGoogle />
                  <SignInWithFacebook />
                </>
              )
            }
          ></Route>
          <Route
            path="/ChatRoom"
            element={
              user ? (
                <ChatRoom />
              ) : (
                <>
                  <SiginWithGoogle />
                  <SignInWithFacebook />
                </>
              )
            }
          ></Route>

          <Route
            path="/Profile"
            element={
              user ? (
                <Profile />
              ) : (
                <>
                  <SiginWithGoogle />
                  <SignInWithFacebook />
                </>
              )
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}
