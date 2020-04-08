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



const Login = props => {

    const actions = bindActionCreators({ ...AuthActions }, useDispatch())
    const [facebookLink, setFacebookLink] = useState('');
    const [emal, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //ฟังก์ชั่นเข้าสู่ระบบด้วยเฟสบุ๊ค
    const getFacebookLink = async () => {

        const res = await axios.get(`http://localhost/api/auth/facebook`);
        setFacebookLink(res.data);

    }

    useEffect(() => {

        getFacebookLink()

    }, []);

   
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


    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        },
        image: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/06/16/20/51/dog-2410332_1280.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();

    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">LOGIN</Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="PSU PASSPORT"
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
                </div>
            </Grid>
        </Grid>
    )
}



export default Login;