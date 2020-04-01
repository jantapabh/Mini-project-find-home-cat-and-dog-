import React, { Component, useState, useEffect } from 'react'
import './Form.css'


const Register = () => {

    return (

        <div>
            <div className="Footer">
            </div>
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