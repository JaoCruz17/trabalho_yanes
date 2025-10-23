// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC52CJ2xADE3zLv2nrqxeqylc_FpUpKRRU",
  authDomain: "projeto-yanes.firebaseapp.com",
  projectId: "projeto-yanes",
  storageBucket: "projeto-yanes.firebasestorage.app",
  messagingSenderId: "932788447921",
  appId: "1:932788447921:web:d33003fa5415e9cfbf5090"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
