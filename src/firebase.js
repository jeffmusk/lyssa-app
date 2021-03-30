import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjLeG8aRLY5pU2Mu2TqBULDF7uyFh3ZtU",
  authDomain: "jeffproyecto0.firebaseapp.com",
  projectId: "jeffproyecto0",
  storageBucket: "jeffproyecto0.appspot.com",
  messagingSenderId: "1034316332152",
  appId: "1:1034316332152:web:6d2cc0daeb38afc043818d",
  measurementId: "G-YDRZE0DK4M",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();

export const db = baseDb;
