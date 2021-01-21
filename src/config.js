import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_CXkhfCKEPPjTleYqVG7Da2fxJgiGs_A",
    authDomain: "friend-b22ec.firebaseapp.com",
    projectId: "friend-b22ec",
    storageBucket: "friend-b22ec.appspot.com",
    messagingSenderId: "795550708308",
    appId: "1:795550708308:web:5406d14b55f22da6e033c1",
    measurementId: "G-HZ0VL9TH3T"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export {db, auth, storage};