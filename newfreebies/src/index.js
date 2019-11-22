//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//ReactDOM.render(<App />, document.getElementById('root'));
//// If you want your app to work offline and load faster, you can change
//// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// Importing and configuring firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
var config = {
    apiKey: "AIzaSyC7bISvg7OGw2gZiq0C6Ya8qVQqMu73xJA",
    authDomain: "freebies-f44de.firebaseapp.com",
    databaseURL: "https://freebies-f44de.firebaseio.com",
    projectId: "freebies-f44de",
    storageBucket: "freebies-f44de.appspot.com",
    messagingSenderId: "544421071757"
};
firebase.initializeApp(config);
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL + '/'}><App /></BrowserRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
