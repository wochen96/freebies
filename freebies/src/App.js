import React, { Component } from 'react';
import firebase from 'firebase/app';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Landing from './Landing.js';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path ="/" render={() => { 
            return (
              <main>
                <Landing />
              </main>
            );
          }}/>
          {/* <Route path ="/home" render={() => {
            return (
              <main>
                <Navbar />
                <Dashboard />
                <Footer />
              </main>
            );
          }}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
