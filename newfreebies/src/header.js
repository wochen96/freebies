import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import CreateModal from './CreateModal';
//import './default.css';

class Header extends Component {
    modalCheck = ({createOpenModal}) => {
        this.showAddModal = createOpenModal;
    }
     
    onAddClick = () => {
        this.showAddModal();
    }

    render() {
        return (
            <header className="App-header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#logo">LOGO</Navbar.Brand>
                    <Nav className="navbar-nav nav-fill w-100">

                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            {/* <Nav.Link href="#signout">SIGN OUT</Nav.Link> */}
                            <Button>SIGN OUT</Button>
                        </Nav.Item>

                        <Nav.Item>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="edit_text" />
                                {/* <Button variant="outline-info">Search</Button> */}
                                <Button>SEARCH</Button>
                            </Form>
                        </Nav.Item>

                        <Nav.Item>
                            {/*<Nav.Link href="#definite">Definite</Nav.Link>*/}
                            <Button>DEFINITE</Button>
                        </Nav.Item>

                        <Nav.Item>
                            {/* <Nav.Link href="#indefinite">Indefinite</Nav.Link> */}
                            <Button>INDEFINITE</Button>
                        </Nav.Item>

                        <Nav.Item>
                            <CreateModal ref={this.modalCheck}></CreateModal>
                            <Button onClick={this.onAddClick}>ADD</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </header>
        );

    }
 }

export default Header;