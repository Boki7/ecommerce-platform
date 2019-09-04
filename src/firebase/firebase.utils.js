import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBW3u-L4-ye9VLffGB7ZyyfLhe8z1LcXy8",
  authDomain: "crw-shop.firebaseapp.com",
  databaseURL: "https://crw-shop.firebaseio.com",
  projectId: "crw-shop",
  storageBucket: "",
  messagingSenderId: "1096095759890",
  appId: "1:1096095759890:web:a58b53fc4622b488"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();


