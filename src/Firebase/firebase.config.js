import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYnkeMgR5VzuiJVFtmnaiOkQ12k6OMPP0",
  authDomain: "event-manage-38ce0.firebaseapp.com",
  projectId: "event-manage-38ce0",
  storageBucket: "event-manage-38ce0.appspot.com",
  messagingSenderId: "1091027290876",
  appId: "1:1091027290876:web:5d0e02e7dac287980ea579",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
