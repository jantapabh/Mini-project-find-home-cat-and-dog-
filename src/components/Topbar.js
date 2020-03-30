import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../static/images/logo.png'
import './Topbar.css'
import { Link } from 'react-router-dom'


const Topbar = () => {

    return (
        <div>
            <div className="Images">
                <a href="/">
                    <img src={logo} />
                </a>
            </div>
            <div className="menu-list">
            <div>
                    <a className="link" href="/ListItems">หน้าหลัก</a>
                </div>
                <div>
                    <a className="link" href="/FormInput">กรอกข้อมูล</a>
                </div>
                <div>
                    <a className="link" href="/Register">ลงทะเบียน</a>
                </div>
            </div>
        </div>
    );
}
export default Topbar;