import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../static/images/logo1.png'
import './Topbar.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, NavDropdown, Navbar, FormControl } from 'react-bootstrap';



const Topbar = () => {

    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">CHUAY NONG HAA BAAN</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/ListItems">OBSERVATION ROOM</Nav.Link>
                    <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">LOGIN</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">REGISTER</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">LOGOUT</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>


    );
}
export default Topbar;