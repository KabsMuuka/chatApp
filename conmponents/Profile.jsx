import { initializeApp } from "firebase/app"; //initalizer
import { getAuth } from "firebase/auth";

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

  console.log(auth.currentUser);
  return (
    <>
      <div className="profile-grid-container">
        <div className="grid-content">
          <img width={300} src="/briona-baker.jpg" alt="" />
        </div>
        <div className="grid-content">
          <span> Bios </span>
        </div>

        <div className="grid-content">
          <span>{auth.currentUser.displayName}</span>
        </div>

        <div className="grid-content">
          <span>{auth.currentUser.email}</span>
        </div>

        <div className="grid-content">
          <span> Status </span>
        </div>
      </div>
    </>
  );
}
