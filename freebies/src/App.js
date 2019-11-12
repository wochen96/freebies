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

      <div className="App">
        
        <Header />

        <DashboardBody />

        <Footer />

      </div>



      

      /* <div>
        <p>
          body
        </p>
      </div> */

      /*<footer>
        <Navbar bg="dark" variant="dark">
          <Nav className="#footer">
          <Nav.Link href="#contactUs">Contact Us</Nav.Link>
          <Nav.Link href="#aboutUs">About Us</Nav.Link>
          </Nav>
        </Navbar>
      </footer>*/
    );

  }

export default App;


