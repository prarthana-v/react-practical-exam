import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVf-XdTSbQW0mLVyy3Q8tLyB2Zowl5Cn0",
  authDomain: "react-exam-practical.firebaseapp.com",
  projectId: "react-exam-practical",
  storageBucket: "react-exam-practical.appspot.com",
  messagingSenderId: "176500756082",
  appId: "1:176500756082:web:3fec6b374a85ca906e7ceb",
  measurementId: "G-Z5M59V0RDH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
