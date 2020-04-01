import React from 'react'
import './Main.css';
import pic6 from '../static/images/pic6.jpg'
import { useMediaQuery } from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Main = () => {

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    return (
        <div>
            
        </div>
    )
}
export default Main;