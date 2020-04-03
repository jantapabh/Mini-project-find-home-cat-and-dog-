import React, { Component, useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios';
import './Form.css'
import FacebookLogin from 'react-facebook-login';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Form, Card } from 'react-bootstrap';




const Login = (props) => {

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

    
    const LoginForm = (e) => {

        //ในส่วนของ login นั้นจะเข้าได้เฉพาะ  username = 6035512034 แต่รหัสเป็นอะไรก็ได้มากกว่า 6 ตักอักษร 
        //กำหนดเงื่อนไขไว้ให้เช็คในส่วน username

        e.preventDefault();
        actions.loginForm(username, password)

    }

    return (
        <div>
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <h2 className="Topic">Login</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">USER NAME</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            onChange={(e)=>setUsername(e.target.value)}
                             />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                             />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary my-1" type="submit" onClick={LoginForm}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login;