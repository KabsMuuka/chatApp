import zIndex from "@mui/material/styles/zIndex";
import { initializeApp } from "firebase/app"; //initalizer
import { getAuth } from "firebase/auth";

export default function SidBar(props) {
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
  console.log("This is a side bar", props.MessageInfor);

  const { text, uid, senderName, createdAt } = props.MessageInfor || [];
  const displaySenderName = uid === auth.currentUser.uid ? " " : senderName;

  console.log("NAME", displaySenderName);
  return (
    <>
      <div className="sidBar-grid-container">
        <hr />
        <span className="DISPLAYNAME">{displaySenderName}</span>
        <hr />
      </div>
    </>
  );
}
