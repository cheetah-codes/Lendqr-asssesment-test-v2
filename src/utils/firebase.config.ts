import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDoHEVJy1o0Z7rRA2SOFy4eXTFhOC3OpPc",
  authDomain: "lendsqr-assessment-0.firebaseapp.com",
  projectId: "lendsqr-assessment-0",
  storageBucket: "lendsqr-assessment-0.appspot.com",
  messagingSenderId: "1010764361129",
  appId: "1:1010764361129:web:ae79c28e504b192fed68b8",
};
//init firebasee app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

const colRef = collection(db, "books");
const authenticator = getAuth();

// connectAuthEmulator(authenticator, "https://localhost:9099");

export { db, colRef, authenticator };
