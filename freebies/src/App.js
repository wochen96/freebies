import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

function App() {
    return(
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="#all-buttons">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#signout">SIGN OUT</Nav.Link>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="edit_text" />
              <Button variant="outline-info">Search</Button>
            </Form>
            <Nav.Link href="#definite">Definite</Nav.Link>
            <Nav.Link href="#indefinite">Indefinite</Nav.Link>
            <Nav.Link href="#add">ADD</Nav.Link>
          </Nav>
        </Navbar>

        <p>
          Body
        </p>

      </header>
    );

  }

export default App;


