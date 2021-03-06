import React, { Component, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../static/images/logo1.png'
import './Topbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, NavDropdown, Navbar, FormControl, Spinner, Icon } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import fire from '../config/fire';





const Topbar = () => {

const logout = e => {

    fire.auth().signOut();
}


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
                            <Nav.Link href="/FormInput" style={{ fontSize: 20 }}>กรอกข้อมูลหาบ้าน</Nav.Link>
                            <Nav.Link href="/FormInputTwo" style={{ fontSize: 20 }}>กรอกข้อมูลประกาศหา</Nav.Link>
                            <Nav.Link href="/ListItems" style={{ fontSize: 20 }}>ประกาศหาบ้าน</Nav.Link>
                            <Nav.Link href="/ListItemsTwo" style={{ fontSize: 20 }}>ประกาศหาย</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Avatar>
                                <img src="https://www.wisible.io/wp-content/uploads/2019/08/avatar-human-male-profile-user-icon-518358.png" style={{ width: 50, height: 50}}/>
                            </Avatar>
                             <NavDropdown title="USER" style={{ fontSize: 20, margin: 1, padding: 5 }} id="basic-nav-dropdown">
                                <NavDropdown.Item style={{ fontSize: 15 }} onClick={logout}>LOGOUT</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }

export default Topbar;