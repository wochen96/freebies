import React from 'react';
import { Button, Card,roundedCircle, Col, Row, Container} from 'react-bootstrap';
import './App.css';




var backgroundColor = { "Default": "#282c34"};

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer text-left">

                <div className="Container" style={{backgroundColor: backgroundColor.Default}}>
                    
                    <p style={{fontWeight: "bold", color: "white", display:"flex",justifyContent: "space-between"}}>About Us<p> Contact Us </p> </p>
                    
                    { /*<p style={{fontWeight: "bold", color: "white", textAlign:"right"}}>Contact Us</p>*/ }

                    <Row>
                        <Col>
                    <p style={{fontWeight:"h1", color:"white"}}><img src={require('./pic.png')} style={{width: '30px', height: '30px'}}  /> Calvin Chen  <img src={require('./pic.png')} style={{width: '30px', height: '30px'}} /> Saurav Kharb</p>
                    <p style={{fontWeight:"h1", color:"white"}}><img src={require('./pic.png')} style={{width: '30px', height: '30px'}} /> Wo Bin Chen  <img src={require('./pic.png')} style={{width: '30px', height: '30px'}} /> Jimmy Tran</p>
                        </Col>
                    
                        <Col>
                    
                        </Col>
                    </Row>

                </div>
            </footer>

        );
    }
}

export default Footer;