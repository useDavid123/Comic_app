// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat";



const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyA3cJ1vHdUf0ka61LS46iLyi3is0TH7Rss",
    authDomain: "rexiam.firebaseapp.com",
    projectId: "rexiam",
    storageBucket: "rexiam.appspot.com",
    messagingSenderId: "297671458685",
    appId: "1:297671458685:web:30a6cccc7d6cdf8ef7d614",
    measurementId: "G-T95RJ2RTGC"
  });

  const storage = firebase.storage();
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

  export default storage   ;
