import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import firebase from "firebase/app";
import SignOut from "./signOut";
import App from "./App";

//import './default.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }


    render() {
        console.log(this.state.user);
        return (
            <header className="App-header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#logo">LOGO</Navbar.Brand>
                    <Nav className="navbar-nav nav-fill w-100">

                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#welcome">Welcome,[insert user]{this.state.user}</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#signout"><SignOut /></Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Form inline>
                                <FormControl id="search" type="text" placeholder="Search" className="edit_text" />
                                <Button variant="outline-info" onClick={this.props.searchDatabase}>Search</Button>
                            </Form>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#definite">Definite</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#indefinite">Indefinite</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#add">ADD</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </header>
        );

    }
 }

export default Header;