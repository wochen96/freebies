import React, { Component } from 'react';
//import logo from './logo.svg';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import CreateModal from './CreateModal';
//import './default.css';
import SignOut from "./SignOut";

class Header extends Component {

    constructor(props) {
        super(props);

        this.refCreateView = React.createRef();
    }

    onAddClick = () => {
        const currentCreateView = this.refCreateView.current;

        if (currentCreateView.state.createModalShow == false) {
            currentCreateView.createOpenModal();
        }
    }

    render() {
        return (
            <header className="App-header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#logo" id="logo">Freebies</Navbar.Brand>
                    <Nav className="navbar-nav nav-fill w-100">

                        {/* <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item> */}

                        <Nav.Item>
                            <CreateModal ref={this.refCreateView} userEmail={this.props.userEmail}></CreateModal>
                            <Button variant="info" onClick={this.onAddClick}>New Post</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <div> Filter posts duration</div>
                            <Nav.Item>
                                {/*<Nav.Link href="#definite">Definite</Nav.Link>*/}
                                <Button variant="outline-secondary" size="sm" value="definite" onClick={this.props.changeDefinite}>DEFINITE</Button>
                            </Nav.Item>

                            <Nav.Item>
                                {/* <Nav.Link href="#indefinite">Indefinite</Nav.Link> */}
                                <Button variant="outline-secondary" size="sm" value="indefinite" onClick={this.props.changeDefinite}>INDEFINITE</Button>
                            </Nav.Item>
                        </Nav.Item>


                        <Nav.Item>
                            <Form inline>
                                <FormControl id="search" type="text" placeholder="Search" className="edit_text" />
                                {/* <Button variant="outline-info">Search</Button> */}
                                <Button value="yes" variant="outline-info" onClick={this.props.searchDatabase}>Search</Button>
                            </Form>
                        </Nav.Item>

                        <Nav.Item>
                        <div>Logged in as :</div>
                            <span>{this.props.userEmail}</span>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#signout"><SignOut /></Nav.Link>
                        </Nav.Item>


                    </Nav>
                </Navbar>
            </header>
        );

    }
}

export default Header;