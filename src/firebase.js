// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_KBbBNjHkqPnkusiKK8U_W37RLJFdlqA",
  authDomain: "ark-project-22609.firebaseapp.com",
  projectId: "ark-project-22609",
  storageBucket: "ark-project-22609.appspot.com",
  messagingSenderId: "52814981431",
  appId: "1:52814981431:web:e6707e0c2d2d10d14812b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);