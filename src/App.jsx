import { initialzeApp } from "firebase/app"; //initalizer
import { getAuth } from "firebase/auth"; //auth
import { collection } from "firebase/firestore"; //database

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
const app = initialzeApp(firebaseConfig);
const auth = getAuth();

function App() {
  return <></>;
}

export default App;
