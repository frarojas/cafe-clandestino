// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuS2XcQbvj1W-nd8rJUdkyszk9zq-xmYM",
  authDomain: "mafiadelcafe-cb9de.firebaseapp.com",
  projectId: "mafiadelcafe-cb9de",
  storageBucket: "mafiadelcafe-cb9de.firebasestorage.app",
  messagingSenderId: "982335517070",
  appId: "1:982335517070:web:bd8777f807ff3116c0f4df",
  measurementId: "G-C9NL6LDZ1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);