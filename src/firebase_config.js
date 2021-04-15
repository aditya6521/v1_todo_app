import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDyetEmOiE8DXrhatPp5p8Un48BY0-dKGo",
    authDomain: "v1todoapp.firebaseapp.com",
    projectId: "v1todoapp",
    storageBucket: "v1todoapp.appspot.com",
    messagingSenderId: "931188822658",
    appId: "1:931188822658:web:281316d7a178f869835a9b"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
