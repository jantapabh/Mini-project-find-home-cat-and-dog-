import React, { Component, useState, useEffect } from 'react'
import './Login.css'
import './Form.css'

class Login extends Component {



    // state = {

    //     username: '',
    //     password: ''

    // }

    // onInputChange = (event) => {

    //     this.setState({

    //         [event.target.name]: event.target.value

    //     })

    //     console.log(this.state);

    // }

    // onLoginSubmit = (event) => {

    //     event.preventDefault();  //กำหนดให้ไม่มีการโหลดหน้า pages ใหม่เมื่อมีการกดปุ๋มส่งฟอร์ม
    //     console.log(this.state);
    // }

    render() {
        return (
            <div>
                <div className="Footer">
                </div>
                <div className="col-6 mt-5 mx-auto card">
                    <div className="card-body">
                        <h2 className="Topic">Login</h2>
                    </div>
                    <form onSubmit={this.onLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">USER NAME</label>
                            <input type="text"
                                name="username"
                                className="form-control is-valid"
                                id="username"
                                onChange={this.onInputChange} />
                            <div className="valid-feedback">พบชื่อผู้ใช้</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password"
                                name="password"
                                className="form-control is-invalid"
                                id="password"
                                onChange={this.onInputChange} />
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
}

export default Login