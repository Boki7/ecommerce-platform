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

export const createCollectionsAndDocuments = async (
  collectionKey,
  collectionObj
) => {
  const collectionRef = firestore.collection(collectionKey);

  const collectionObjArr = Object.values(collectionObj);
  const batch = firestore.batch();
  collectionObjArr.forEach(obj => {
    const documentRef = collectionRef.doc();
    batch.set(documentRef, obj);
  });

  return await batch.commit();
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`/users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("can't create user", error.message);
    }
  }

  return userRef;
};

export const getCollections = collection => {
  const collectionDocs = collection.docs;
  const transformedCollection = collectionDocs.map(collection => {
    const { title, items } = collection.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: collection.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
