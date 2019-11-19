import React, { Component, ProTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

// components
import Header from './header';
import Footer from './footer';
import MidleSection from './MidleSection'
//import DashboardBody from './Dashboard';
//import Dashboard from './Dashboard2';

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