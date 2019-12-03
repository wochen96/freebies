import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// components
import Header from './header';
import Footer from './Footer';
import MidleSection from './MidleSection'
import AboutUs from './AboutUs';
import Contact from './ContactUs';


import firebase from "firebase/app";
import 'firebase/firestore'


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDefiniteSelected: 'definite',
            searchCheck: 'no'
        }
        //console.log('the user name is: ' + this.props.user.email);
    }

    changeDefinite = event => {
        this.setState({
            isDefiniteSelected: event.target.value,
            searchCheck: 'no'
        })
    }

    searchDatabase = (event) => {
        this.setState({
            searchCheck: event.target.value
        })
    }


    render() {
        return (
            <Router>
                <div className="dashboard">
                    <Header changeDefinite={this.changeDefinite} searchDatabase={this.searchDatabase} userEmail={this.props.userEmail} />

                    <Route path="/home" render={() => {
                        return (
                            <MidleSection isDefiniteSelected={this.state.isDefiniteSelected} searchCheck={this.state.searchCheck} userEmail={this.props.userEmail} />
                            
                        );
                    }} />

                    {/* <Route path="/contact" component={Contact} />
                    <Route path="/about" component={AboutUs} /> */}

                    <Footer style={{ position: 'absolute', bottom: '0', right: '0' }} />
                </div>
            </Router>






        );

    }
}

export default Dashboard;


/*<div>


<Switch>
    <Route path="/home" render={() => {
        return (
            <MidleSection isDefiniteSelected={this.state.isDefiniteSelected} searchCheck={this.state.searchCheck} />
        );
    }} />



    <Route exact path="/contact" component={ContactUs} />
    <Route path="/about" component={AboutUs} />

</Switch>


</div>*/