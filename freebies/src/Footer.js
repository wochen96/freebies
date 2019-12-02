import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render() {
        return(
            <footer className="py-5 bg-dark">
                <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Freebies 2019</p>
                </div>
            
            </footer>
        );
    }
}

export default Footer;