import React, { Component, ProTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap'

// components
import Header from './header';
import Footer from './footer';
import MidleSection from './MidleSection'


class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header />

                <MidleSection />

                <Footer />
            </div>
        );

    }
}

export default Dashboard;