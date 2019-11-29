import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import { db, auth } from './services/firebase';
import axios from 'axios';

// components
import Landing from './Landing.js';
import Dashboard from './Dashboard';
import TestFirebase from './TestFirebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount() {
    this.authUnsub = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }
  // Update current user
  updateUser(user) {
    this.setState({
      user: user
    });
  }

  render() {
    if (firebase.auth().currentUser) {
      console.log("logged in");
    }
    else {
      console.log("not signed in");
    }
    console.log(this.state.user);
    //console.log(firebase.auth().currentUser);
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <main>
                <Landing />
              </main>
            );
          }} />
          <Route path="/home" render={() => {
            return (
              <Dashboard />
            );
          }} />
        </Switch>
      </div>
    );
  }
}
export default App;

