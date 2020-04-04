import React, { Component, useState, useEffect } from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import { formActionsUser } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../redux/store'
import { bindActionCreators } from 'redux';



const Register = () => {

   
    const actionUser = bindActionCreators(userActions, useDispatch())
    const actionFormUser = bindActionCreators(formActionsUser, useDispatch())
    const formUser = useSelector(state => state.formUser)
    const users = useSelector(state => state.user)


    const addUser = async () => {

        await axios.post(`http://localhost:8000/api/users`, formUser)

        actionUser.addUser(users, formUser)

    }
        
    

    return (
        <div>
            <div className="row">
                <div className="col-sm-3 mt-5"></div>
                <div className="col-sm-6 mt-5 card">
                    <div className="card-body ml-3 mr-3 mt-5 mb-1">
                        <form>
                        <div className="form-group">
                                <label htmlFor="username">IMAGE</label>
                                <input type="text"
                                    name="imgUrl"
                                    className="form-control"
                                    id="imgUrl"
                                    onChange={(e) => actionFormUser.changeIdUser(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">USER NAME</label>
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    id="username"
                                    onChange={(e) => actionFormUser.changeImgurlUser(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">PASSWORD</label>
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    onChange={(e) => actionFormUser.changeNameUser(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => actionFormUser.changePasswordUser(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Telephone</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => actionFormUser.changeTelephoneUser(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Facebook</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => actionFormUser.changeFacebookUser(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Line</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => actionFormUser.changeLineUser(e.target.value)}
                                />
                            </div>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor"  onChange={(e) => actionFormUser.changeAddressUser(e.target.value)}/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control  onChange={(e) => actionFormUser.changeCityUser(e.target.value)}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control   onChange={(e) => actionFormUser.changeStateUser(e.target.value)} />
                                </Form.Group>

                                <Form.Group  controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control   onChange={(e) => actionFormUser.changeZipUser(e.target.value)} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <div className="text-center">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    onClick={addUser}
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