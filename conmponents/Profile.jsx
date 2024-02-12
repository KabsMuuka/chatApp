import { initializeApp } from "firebase/app"; //initalizer
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  query,
  getDoc,
} from "firebase/firestore"; //database

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { DisabledByDefault } from "@mui/icons-material";
export default function Profile() {
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

  // FIREBASE DATABASE
  // const firestore = getFirestore();

  // //connect to the database collection/table
  // const databaseCollection = collection(firestore, "userInformation");

  // const Query = query(databaseCollection);

  // //real time communication with firebase database Collection
  // const [Bios] = useCollectionData(Query, {
  //   idField: "id",
  // });

  const [userBios, setBios] = useState(""); //user input bios

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { uid } = auth.currentUser;

  //   addDoc(Query, {
  //     text: userBios,
  //     uid,
  //   });
  //   setBios("");
  // };
  return (
    <>
      <div className="profile-grid-container">
        <div className="grid-content">
          <img width={200} src="/briona-baker.jpg" alt="" />
        </div>

        <div className="grid-content">
          <label htmlFor="">DisplayName: </label>{" "}
          <span>{auth.currentUser.displayName}</span>
        </div>

        <div className="grid-content">
          <label htmlFor="">User Email: </label>{" "}
          <span>{auth.currentUser.email}</span>
        </div>
      </div>
    </>
  );
}
