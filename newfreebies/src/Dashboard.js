import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// components
import Header from './header';
import Footer from './footer';
import MidleSection from './MidleSection'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDefiniteSelected: 'definite',
            checkBoolean: true
        }
    }

    changeDefinite = event => {
        this.setState({
            isDefiniteSelected: event.target.value
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Header changeDefinite={this.changeDefinite} />

                    <Switch>
                        <Route path="/home" render={() => {
                            return (
                                <MidleSection isDefiniteSelected={this.state.isDefiniteSelected} />
                            );
                        }} />

                        {/* <Route path="/contact" render={() => {
                            return (
                                <ContactUs />
                            );
                        }} /> */}

                        <Route path="/contact" component={ContactUs} />
                        <Route path="/about" component={AboutUs} />

                    </Switch>



                    <Footer />
                </div>
            </Router>
        );

    }
}

export default Dashboard;