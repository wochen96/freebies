import React, { Component } from 'react';

// components
import Dashboard from './Dashboard';


//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import { Button, Navbar, Nav, Form, FormControl, ButtonToolbar } from 'react-bootstrap'

import { Navbar, NavItem, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import AddDepModal from './AddDepModal'

function App() {
    return(

      <div className="App">
       <Dashboard />
      </div>
    );

}

export default App;


