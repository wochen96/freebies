import React, { Component } from 'react';

// components
//import Header from './header';
//import Footer from './footer';
import DashboardBody from './Dashboard';
//import Dashboard from './Dashboard2';


//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl, ButtonToolbar } from 'react-bootstrap'
//import Modal from 'react-modal';

import ReactDOM from "react-dom";
//import App from "./App";

import Landing from './Landing.js';
import SignOutView from "./signOut";
import Dashboard from './Dashboard.js';
//import Navbar from './Navbar.js';
//import Footer from './Footer.js';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';



class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authUnsub = firebase.auth().onAuthStateChanged(user => {
            console.log("auth change");
            this.setState({ user: user });
        });
    }

    // Update current user

   /* displayEmail = () => {
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
        }
        console.log(email);
        console.log(this.state.user);
    }*/

    updateUser = (user) =>{
        this.setState({
            user: user
        });
    }

    render() {
        console.log(this.state);
        if (firebase.auth().currentUser) {
 
            console.log("logged in");
            console.log(firebase.auth().currentUser.email);
        }
        else {
            console.log("not signed in");
        }


        //console.log(firebase.auth().currentUser);
        return (

            <div>
                <Switch>
                    <Route exact path="/" render={() => {
                        return (
                            <main>
                                <Landing updateUser={this.updateUser} />
                               
                            </main>
                        );
                    }} />
                    <Route path="/home" render={() => {
                        return (
                            <DashboardBody />
                        );
                    }} />
                </Switch>
            </div>

            //<div id="root" className="App">

            //  {/* <Header />

            //  <DashboardBody />

            //  <Footer /> */}

            //  <DashboardBody />

            //</div>

        );
    }
}

export default App; 


//import Modal from "./Modal";


/* class App extends React.Component {

  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };



  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>

        <button  onClick={e => {
              this.showModal();
         }}
          > show Modal </button>

        <Modal onClose={this.showModal} show={this.state.show}>
          Message in Modal
        </Modal>

        <button
            onClose={e => {
              this.onClose(e);
            }}
          >
            Close
          </button>
      </div>
    );
  }
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */




