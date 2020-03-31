import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../static/images/logo.png'
import './Topbar.css'
import { Link } from 'react-router-dom'



const Topbar = () => {

    return (

        <div className="main">    
                <a href="/">
                    <img className="Images" src={logo} />
                </a>       
            <div className="menu-list">
            <div className="topic">
                    <a className="link" href="/ListItems">DETAILS</a>
                </div>
                <div className="topic">
                    <a className="link" href="/FormInput">INPUT DATA</a>
                </div>
                <div className="topic">
                    <a className="link" href="/Register">REGISTER</a>
                </div>
            </div>
        </div>


    );
}
export default Topbar;