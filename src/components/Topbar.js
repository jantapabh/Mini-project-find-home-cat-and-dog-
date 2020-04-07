import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../static/images/logo1.png'
import './Topbar.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, NavDropdown, Navbar, FormControl, Spinner, Icon} from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { MDBRow, MDBCol, MDBIcon, MDBBtn,MDBListGroupItem } from "mdbreact";
import { bindActionCreators } from 'redux';
import axios from 'axios'
import { AuthActions } from '../redux/store'
import { useSelector, useDispatch, Provider } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { userActions } from '../redux/store'

axios.defaults.withCredentials = true


const Topbar = props => {

    // const users = useSelector(state => state.user)
    // const actionsUser = bindActionCreators(userActions, useDispatch());

    // useEffect(() => {

    //     actionsUser.getUsers()
    //     console.log(actionsUser.getUsers())
        
    // }, [])

    const auth = useSelector(state => state.Auth);
    const actions = bindActionCreators(AuthActions, useDispatch())

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
                    </Nav>
                    <Form inline>
                    <Avatar alt={props.name} src={props.imgUrl} />
                    <NavDropdown title="USER" style={{ fontSize: 20, margin: 1, padding: 5}} id="basic-nav-dropdown">
                            <NavDropdown.Item  style={{ fontSize: 15}} onClick={() => actions.logout()}>LOGOUT</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Form>
                </Navbar.Collapse>
           </Navbar>
        </div>
    
    );
}
export default Topbar;