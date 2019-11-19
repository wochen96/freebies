import React, { Component } from 'react';
import firebase from 'firebase/app';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }
    
    // Sign in using Google popup authentication
    signIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch((error) => alert(error));
    }

    // Sign out
    signOut() {
        firebase.auth().signOut().catch((error) => alert(error));
    }

    render() {
        return(
            <div className="container h-100">
                <div className="row">
                    <div className="col-6 align-self-center">
                        <div className="text-center">
                            <NavLink type="button" onClick={this.signIn} to="/home" className="btn btn-primary">
                                Login
                            </NavLink>
                            <p>Please click on the link above to sign in with your Google account</p>
                        </div>
                    </div>
                    <div className="col-6 align-self-center">
                        <div className="text-center">
                            <h2>About Us</h2>
                            <p>Our mission is to help students take advantage of the free resources that UW campus provides</p>
                            <h2>Contact Us</h2>
                            <p>Phone:</p>
                            <p>Email:</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;