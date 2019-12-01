import React, { Component, ProTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import firebase from "firebase/app";
import 'firebase/firestore';

// components
import Header from './header';
import Footer from './footer';
import MidleSection from './MidleSection'
//import DashboardBody from './Dashboard';
//import Dashboard from './Dashboard2';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        }
    }


    searchDatabase = () => {
        var searchTerm = document.getElementById("search").value.toLowerCase();
        var db = firebase.firestore();
        //var postsRef = db.collection("posts");
        //postsRef.doc("testPost").set({
        //    title : "Test post"
        //});
        // Call some stuff in database


        db.collection("posts").get().then(function (collection) {
            collection.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                //console.log(doc.data().title.toLowerCase());

                if (doc.data().title.toLowerCase().includes(searchTerm)) {
                    console.log("Found the term");
                    console.log(doc.data().title);
                }
            });
        });
        

        //var test = db.collection("posts");//.doc("obEvz8lHOaoEPG133uPi");
        //test.get().then(function (doc) {
        //    //console.log(doc.data());
        //    if (doc.exists) {
        //        console.log(doc.data());
        //    } else {
        //        console.log("doc doesn't exist");
        //    }
        //}).catch(function (error) {
        //    console.log("error");
        //    console.log(error);
        //});


        //console.log(db.collection("posts").doc("obEvz8lHOaoEPG133uPi").get().data());
        //console.log(document.getElementById("search").value);
        //console.log(searchTerm);
    }

    render() {
        return (
            <div>
                <Header searchDatabase={this.searchDatabase} />

                <MidleSection />

                <Footer style={{position:'absolute', bottom:'0',right:'0'}} />
            </div>
        );

    }
 }

export default Dashboard;