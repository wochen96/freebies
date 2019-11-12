import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return(
            <div className="container h-100">
                <div className="row">
                    <div className="col-6 align-self-center">
                        <div className="text-center">
                            <button type="button" className="btn btn-primary">Login</button>
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