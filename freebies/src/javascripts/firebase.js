// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
// //      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-analytics.js"></script>

import * as firebase from 'firebase'
let database
export const init = () => {
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}