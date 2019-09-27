import { firestore, getCollections } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: "FETCH_COLLECTIONS_START"
  };
};

export const fetchCollectionsSucces = collections => {
  return {
    type: "FETCH_COLLECTIONS_SUCCES",
    payload: collections
  };
};

export const fetchCollectionsFailed = errorMessage => {
  return {
    type: "FETCH_COLLECTIONS_FAILED",
    payload: errorMessage
  };
};

export const fetchCollections = () => {
  return async dispatch => {

    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef.get().then(snapshot => {
      const collectionsMap = getCollections(snapshot)
      dispatch(fetchCollectionsSucces(collectionsMap))
    }).catch(error => {
      dispatch(fetchCollectionsFailed(error))
    })
  };
};
