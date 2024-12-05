import { auth } from './firebaseConfig.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Enregistrement d'un utilisateur
document.getElementById("registerBtn")?.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Utilisateur enregistré:", userCredential.user);
      window.location.href = "login.html"; // Rediriger vers la page de connexion
    })
    .catch((error) => {
      console.error("Erreur lors de l'enregistrement:", error);
      alert("Erreur lors de l'enregistrement: " + error.message);
    });
});

// Connexion d'un utilisateur
document.getElementById("loginBtn")?.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Utilisateur connecté:", userCredential.user);
      window.location.href = "dashboard.html"; // Rediriger vers le tableau de bord
    })
    .catch((error) => {
      console.error("Erreur lors de la connexion:", error);
      alert("Erreur lors de la connexion: " + error.message);
    });
});
