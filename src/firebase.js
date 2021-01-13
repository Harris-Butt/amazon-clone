import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuMkq_KXHzHICBPLaPL5ALzyWubRsUskc",
  authDomain: "clone-b88ad.firebaseapp.com",
  databaseURL: "https://clone-b88ad.firebaseio.com",
  projectId: "clone-b88ad",
  storageBucket: "clone-b88ad.appspot.com",
  messagingSenderId: "75937547293",
  appId: "1:75937547293:web:b0fab9b0dac14aa7f7b2f4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
