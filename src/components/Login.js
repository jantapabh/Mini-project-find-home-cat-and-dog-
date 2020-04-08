import React, { Component, useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios';
import './Form.css'
import FacebookLogin from 'react-facebook-login';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Form, Card } from 'react-bootstrap';
import { render } from '@testing-library/react';
import { MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import fire from '../config/fire';





function Copyright() {

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


class Login extends Component {



    constructor(props) {

        super(props)
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.signup = this.signup.bind(this)
        this.state = {

            email: "",
            password: " "
        }

    }

    login(e) {

        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)

        }).catch((err) => {

            console.log(err)

        })
    }

    signup(e) {
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (


            <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="EMAIL"
                    name="email"
                    autoComplete="text"
                    autoFocus
                    value={this.state.email}
                    onChange={this.handleChange}

                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleChange}

                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <div className="text-center">
                    <button className="btn btn-primary my-1" type="submit" onClick={this.login}>Login</button>
                    <button className="btn btn-primary my-1" type="submit" onClick={this.signup}>Signup</button>
                    <div className="row my-3 d-flex justify-content-center">
                    </div>
                </div>
            </form>

        )
    }

}



export default Login;