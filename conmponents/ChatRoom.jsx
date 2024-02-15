import { initializeApp } from "firebase/app"; //initalizer
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore"; //database
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useRef, useState } from "react";
import SidBar from "./SidBar";

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

export default function ChatRoom() {
  const firestore = getFirestore();
  //get the database where messages are stored
  const databaseCollection = collection(firestore, "messages");
  //making a query
  const messageQuery = query(databaseCollection, orderBy("createdAt"));
  // > useCollectionData  real time data storage in database, and data retrieval
  const [messages] = useCollectionData(messageQuery, {
    idField: "id",
  });

  //user input values
  const [userInput, setUserInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    addDoc(databaseCollection, {
      text: userInput,
      uid,
      createdAt: serverTimestamp(),
      senderName: auth.currentUser.displayName,
    });
    setUserInput("");
  };

  return (
    <>
      {/* <span className="sidBar-grid-container">
        {messages &&
          messages.map((userMsg, index) => (
            <SidBar key={index} MessageInfor={userMsg} />
          ))}
      </span> */}
      <div className="message-container">
        {/* /* messages.map((msg) => ...) is a method that iterates over each element in the messages array.
             For each iteration, it executes the provided function, which returns a ChatMessage component.
             The key={msg.id} prop is used to uniquely identify each ChatMessage */}
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
      </div>

      <form className="form-message-space" onSubmit={sendMessage}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">
          {" "}
          <img className="micro-img" src="/send-message.png" alt="" />{" "}
        </button>
      </form>
    </>
  );

  function ChatMessage(props) {
    const { text, uid, senderName, createdAt } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    const displaySenderName = uid === auth.currentUser.uid ? "You" : senderName;

    const messageContainerReference = useRef(null);
    useEffect(() => {
      if (messageContainerReference.current) {
        messageContainerReference.current.scroll({
          top: messageContainerReference.current.scrollHeight,
          behavoir: "smooth",
        });
      }
    }, [props.message]);

    return (
      <>
        <div className={`message ${messageClass}`}>
          <p>
            <span className="senderName"> {displaySenderName} </span> <br />
            {text}{" "}
          </p>
          <span className="timeStamp">
            {" "}
            {/* to display data and time  */}
            {/* {createdAt && createdAt.toDate().toLocaleString()} */}
            {/* to display time alone */}
            {createdAt && createdAt.toDate().toLocaleTimeString()}
          </span>
        </div>
      </>
    );
  }
}
