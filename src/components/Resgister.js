import React, { Component, useState, useEffect } from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col } from 'react-bootstrap';


const Register = () => {

    return (
        <div>
            <div className="row">
                <div className="col-sm-3 mt-5"></div>
                <div className="col-sm-6 mt-5 card">
                    <div className="card-body ml-3 mr-3 mt-5 mb-1">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">USER NAME</label>
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    id="username" />
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
                                <label htmlFor="email">Contact</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Telephone</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Facebook</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Line</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                />
                            </div>
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" value="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
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