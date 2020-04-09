import React, { Component, useState, useEffect } from 'react'
import './Login.css'
import './Form.css'
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
import fire from '../config/fire';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'



//Login and Sign up with firebase email and password
class Login extends Component {

    state = { isSignedIn: false }

    uiConfig = {

        signInFlow: "popup",
        signInOptions: [

            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],

        callback: {

            signInSuccess: () => false
        }
    }

    componentDidMount = () => {

      

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }

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
            <div>
                <Grid container component="main" className="root">
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className="image" />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className="paper">
                            <Avatar className="avata">
                                <LockOutlinedIcon style={{ backgroundColor: 'green' }} />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log In
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
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="submit"
                                    onClick={this.login}
                                >
                                    Log In
            </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className="submit"
                                    onClick={this.signup}
                                    style={{ margin: 5, }}
                                >
                                    Sign Up
            </Button>
            <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}

                                />


                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

}



export default Login;