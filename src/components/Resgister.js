import React, { Component, useState, useEffect } from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';



const Register = () => {

   
    // const actionUser = bindActionCreators(userActions, useDispatch())
    // const actionFormUser = bindActionCreators(formActionsUser, useDispatch())
    // const formUser = useSelector(state => state.formUser)
    // const users = useSelector(state => state.user)


    // const addUser = async () => {

    //     await axios.post(`http://localhost:8000/api/users`, formUser)

    //     actionUser.addUser(users, formUser)

    // }

    return (
        <div>
            <div className="row">
                <div className="col-sm-3 mt-5"></div>
                <div className="col-sm-6 mt-5 card">
                    <div className="card-body ml-3 mr-3 mt-5 mb-1">
                        <form>
                        <h1 className="Topic">ADD YOUR DATA</h1>
                        <div className="form-group">
                                <label htmlFor="username">IMAGE</label>
                                <input type="text"
                                    name="imgUrl"
                                    className="form-control"
                                    id="imgUrl"
                                     />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">USER NAME</label>
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    id="username"
                              />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">PASSWORD</label>
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                              
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                             
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Telephone</label>
                                <input type="text"
                                    name="telephone"
                                    className="form-control"
                                    id="telephone"
                              
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Facebook</label>
                                <input type="text"
                                    name="facebook"
                                    className="form-control"
                                    id="facebook"
                                   
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Line</label>
                                <input type="text"
                                    name="line"
                                    className="form-control"
                                    id="line"
                                   
                                />
                            </div>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor"/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group  controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control  />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <div className="text-center">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                   >Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-sm-3 mt-5"></div>
            </div>
        </div>
    )
}


export default Register;