import React, { Component } from 'react';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import DashboardBody from './components/pages/homepage';


//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

function App() {
    return(

      <div id="root" className="App">
        
        <Header />

        <DashboardBody />

        <Footer />

      </div>
    );

  }

export default App;


