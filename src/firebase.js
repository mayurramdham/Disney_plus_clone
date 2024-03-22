// import firebase from "../src/App/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBLd2Og34am79lbVy1gYRYu6FpMdGUj44",
  authDomain: "disneyplus-clone-8cc34.firebaseapp.com",
  projectId: "disneyplus-clone-8cc34",
  storageBucket: "disneyplus-clone-8cc34.appspot.com",
  messagingSenderId: "985370715563",
  appId: "1:985370715563:web:ac49d22d91db59dd8b1eee",
  measurementId: "G-CEMC2N9K3V",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
