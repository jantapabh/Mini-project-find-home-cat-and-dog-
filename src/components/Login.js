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



const Login = props => {

const actions = bindActionCreators({ ...AuthActions }, useDispatch())
const [facebookLink, setFacebookLink] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

//ฟังก์ชั่นเข้าสู่ระบบด้วยเฟสบุ๊ค
const getFacebookLink = async () => {

    const res = await axios.get(`http://localhost/api/auth/facebook`);
    setFacebookLink(res.data);

}

useEffect(() => {

    getFacebookLink()

}, []);

const LoginPSU = (e) => {


    e.preventDefault();
    actions.loginPSU(username, password)
}

    return (
        <div>
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <h2 className="Topic">Login</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail">Email</label>
                        <input type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Input Your Email"
                             />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword">PASSWORD</label>
                        <input type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Input Your Password"
                             />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary my-1" type="submit" onClick={LoginPSU}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Login;