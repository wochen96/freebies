import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyC7bISvg7OGw2gZiq0C6Ya8qVQqMu73xJA",
    authDomain: "freebies-f44de.firebaseapp.com",
    databaseURL: "https://freebies-f44de.firebaseio.com",
    projectId: "freebies-f44de",
    storageBucket: "freebies-f44de.appspot.com",
    messagingSenderId: "544421071757",
    appId: "1:544421071757:web:069ded3f8cb76a67424bc4",
    measurementId: "G-KL6M4T183Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;