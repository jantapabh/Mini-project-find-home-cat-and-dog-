import React, { Component, useState, useEffect } from 'react'
import './Login.css'
import './Form.css'

const Login = () => {

    return (
        <div>
            <div className="Footer">
            </div>
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
                             />
                        <div className="valid-feedback">พบชื่อผู้ใช้</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password"
                            name="password"
                            className="form-control"
                            id="password"
                             />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary my-1" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login;