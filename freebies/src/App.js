import React, { Component } from 'react';
import firebase from 'firebase/app';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Landing from './Landing.js';
import Dashboard from './Dashboard.js';
import AboutSection from './AboutSection.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { Route, Switch } from 'react-router-dom';
import Features from './Features.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  // Update current user
  updateUser(user) {
    this.setState({
      user: user
    });
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path ="/" render={() => { 
            return (
              <main>
                <Landing />
                <Features />
                <AboutSection />
                <Footer />
              </main>
            );
          }}/>
          <Route path ="/home" render={() => {
            return (
              <main>
                <Navbar />
                <Dashboard />
                <Footer />
              </main>
            );
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
