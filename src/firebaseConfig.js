// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importation de Firestore

const firebaseConfig = {
  apiKey: "AIzaSyB2_ndkdSpYtcnufPAiGPYKCj31syvAhgM",
  authDomain: "app-mem-d5276.firebaseapp.com",
  projectId: "app-mem-d5276",
  storageBucket: "app-mem-d5276.firebasestorage.app",
  messagingSenderId: "883425492672",
  appId: "1:883425492672:web:44ed4f5dbae1aa19aa3725",
  measurementId: "G-QVY3E7LDVQ"
};

// Initialisation de l'application Firebase
const app = initializeApp(firebaseConfig);

// Initialisation des modules Firebase nécessaires
const auth = getAuth(app);
const db = getFirestore(app); // Ajout de Firestore

export { auth, db };



