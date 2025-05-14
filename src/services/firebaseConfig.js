import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBfzgWoTF1q0EW7DfqTewbxGMieay3pm4A",
  authDomain: "laundry-deliv-app.firebaseapp.com",
  databaseURL: "https://laundry-deliv-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "laundry-deliv-app",
  storageBucket: "laundry-deliv-app.firebasestorage.app",
  messagingSenderId: "87277976312",
  appId: "1:87277976312:web:5182714094ac0752e5590d",
  measurementId: "G-Y0BPJM4V20"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app); 

export { auth, db, database };
