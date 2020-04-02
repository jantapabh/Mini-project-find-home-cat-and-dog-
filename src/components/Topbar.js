import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../static/images/logo1.png'
import './Topbar.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, NavDropdown, Navbar, FormControl, Spinner, Icon} from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { MDBRow, MDBCol, MDBIcon, MDBBtn,MDBListGroupItem } from "mdbreact";



const Topbar = () => {

    return (
        <div>
            <Navbar bg="white" expand="lg">

                <Navbar.Brand href="/">
                    <img
                        src={logo1}
                        width="100"
                        height="80"
                        className="d-inline-block align-top"
                        alt="CAHAUY NONG HAA BAAN"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/FormInput" style={{ fontSize: 20}}>COMPLETE HISTORY</Nav.Link>
                        <Nav.Link href="/ListItems" style={{ fontSize: 20}}>OBSERVATION ROOM</Nav.Link>
                        <Nav.Link href="/Contact" style={{ fontSize: 20}}>CONTACT</Nav.Link>
                        <NavDropdown title="ABOUT" style={{ fontSize: 20}} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Login" style={{ fontSize: 15}}>LOGIN</NavDropdown.Item>
                            <NavDropdown.Item href="/Register" style={{ fontSize: 15}}>REGISTER</NavDropdown.Item>
                            <NavDropdown.Item href="/Logout" style={{ fontSize: 15}}>LOGOUT</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                    <MDBListGroupItem> <MDBIcon icon="user" className="mr-3" size="2x" />JANJOA</MDBListGroupItem>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>


    );
}
export default Topbar;