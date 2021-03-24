import firebase from '@firebase/app';
import "@firebase/firestore"
import "@firebase/storage"
import "@firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyClACQ50Ff9D1351CyVmdTMt1rboffCxqE",
    authDomain: "toperapp-general.firebaseapp.com",
    projectId: "toperapp-general",
    storageBucket: "toperapp-general.appspot.com",
    messagingSenderId: "237216784307",
    appId: "1:237216784307:web:6089f73366d78a81e4b5c6",
    measurementId: "G-DMJY4HCP2Z"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
 
  export const db =  firebase.firestore()
  export const storage = firebase.storage()
  export const auth = firebase.auth()