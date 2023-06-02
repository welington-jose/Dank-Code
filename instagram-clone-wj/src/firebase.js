import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2ur5yXIUsyj8WS3mn1V_My9BlTwBjQzM",
    authDomain: "instagram-clone-wj.firebaseapp.com",
    projectId: "instagram-clone-wj",
    storageBucket: "instagram-clone-wj.appspot.com",
    messagingSenderId: "154670255819",
    appId: "1:154670255819:web:70695675c93c93ad43954e",
    measurementId: "G-CNL4TYT9H1"
});

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const functions = firebase.functions()

export {db, auth, storage, functions}

  