import React, { Component, useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios';
import './Form.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
            <Grid container component="main" className="root">
                <CssBaseline />
                <Grid item className="image" >
                    <img src="https://cdn.pixabay.com/photo/2015/12/13/20/16/cats-1091652_960_720.jpg" style={{ width: 700, height: 500, margin: 20, padding: 10 }} />
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className="paper">
                        <Avatar className="avatar">
                            <LockOutlinedIcon style={{ backgroundColor: 'green' }} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                </Typography>
                        <form className="form" noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
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
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.login}
                                style={{ margin: 5, width: 100 }}
                            >
                                Log in
                  </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.signup}
                                style={{ margin: 5, width: 100 }}
                            >
                                Sign Up
                  </Button>
                            <Grid >
                                <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        className="submit"
                                        onClick={this.signup}
                                        style={{ margin: 5, padding: 10, width: 200 }}

                                    >
                                     LOG IN WITH FACEBOOK
                  </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>

            </Grid>
        )
    }

}



export default Login;