import { collection, getFirestore, orderBy, query } from "firebase/firestore"; //database
import { useState } from "react";
export default function ChatRoom() {
  const firestore = getFirestore();
  //get the database where messages are stored
  const databaseCollection = collection(firestore, "messsages");
  //making a query
  const messageQueries = query(databaseCollection, orderBy("createdAt"));

  // > useCollectionData  real time data storage in database, and data retrieval
  const [messages] = useCollectionData(messageQueries, {
    Fieldid: "id",
  });

  const [userInput, setUserInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    return (
      <>
        <div className="message-container">
          {/* /* messages.map((msg) => ...) is a method that iterates over each element in the messages array.
            For each iteration, it executes the provided function, which returns a ChatMessage component.
            The key={msg.id} prop is used to uniquely identify each ChatMessage */}
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        </div>

        <div>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit"> SendMessage </button>
          </form>
        </div>
      </>
    );
  };

  function ChatMessage(props) {
    const { text, uid } = props.message;
    return (
      <>
        <p>{text}</p>
      </>
    );
  }
}
