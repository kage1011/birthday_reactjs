import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1XjwUqiV0kVByPK8mbVeImsGY6sPQQVM",
  authDomain: "birth-react.firebaseapp.com",
  projectId: "birth-react",
  storageBucket: "birth-react.appspot.com",
  messagingSenderId: "82666563447",
  appId: "1:82666563447:web:9452b3dc1ab50fd30ca372",
  measurementId: "G-RZRSKGR6QG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
