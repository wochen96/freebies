import React, { Component } from 'react';
import firebase from 'firebase/app';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authUnRegFunc = firebase.auth().onAuthStateChanged(user => {
            if (user) { // user is successfully logged in
                this.setState(state => {
                    state.user = user;
                    return state;
                    console.log(firebase.auth().currentUser.email);
                });
                this.props.updateUser(user);
            } else { // user is not logged in
                this.setState(state => {
                    state.user = null;
                    return state;
                });
                this.props.updateUser(null);
            }
        });
    }

    componentWillUnmount() {
        this.authUnRegFunc.off();
    }
    //gapi.auth2.getAuthInstance().disconnect()
    // Sign in using Google popup authentication
    signIn() {


        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch((error) => alert(error));
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                window.location = '/home';
            }
            
        })
    }

    render() {
        return (
            <div className="container h-100">
                <div className="row">
                    <div className="col-6 align-self-center">
                        <div className="text-center">
                            <button type="button" onClick={this.signIn} className="btn btn-primary">
                                Login
                            </button>
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