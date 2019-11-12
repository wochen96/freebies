import React, { Component, ProTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns, Modal } from 'react-bootstrap'

//import {Responsive, WidthProvider} from 'react-grid-layout';
/*import lomap from 'lodash.map'
import loresult from 'lodash.result'
import lorange from 'lodash.range'
import lorandom from 'lodash.random'*/

//import "../node_modules/react-grid-layout/css/styles.css"
//import "../node_modules/react-resizable/css/styles.css"

//const ResponsiveReactGridLayout = WidthProvider(Responsive)

class DashboardBody extends Component {

    //const [show, setShow] = useState(false);

    //handleClose = () => setShow(false);
    //handleShow = () => setShow(true);

    render() {
        return(
            <div>
                <CardColumns>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./uw_icon.png" />
                        <Card.Body>
                            <Card.Title>Free Cookie for All</Card.Title>
                            <Card.Text>
                            Free cokies
                            </Card.Text>
                            <Button variant="primary">Click</Button>
                        </Card.Body>
                    </Card>

                    {/*<Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>*/}

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./uw_icon.png" />
                        <Card.Body>
                            <Card.Title>Free Cookie for All</Card.Title>
                            <Card.Text>
                            Free cokies
                            </Card.Text>
                            <Button variant="primary">Click</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./uw_icon.png" />
                        <Card.Body>
                            <Card.Title>Free Cookie for All</Card.Title>
                            <Card.Text>
                            Free cokies
                            </Card.Text>
                            <Button variant="primary">Click</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./uw_icon.png" />
                        <Card.Body>
                            <Card.Title>Free Cookie for All</Card.Title>
                            <Card.Text>
                            Free cokies
                            </Card.Text>
                            <Button variant="primary">Click</Button>
                        </Card.Body>
                    </Card>
                    
                </CardColumns>


            </div>
        );

    }
 }

export default DashboardBody;