import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Topbar from './components/Topbar';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import { Switch } from 'antd';
import { store } from './redux/store'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInput from './components/FormInput';
import ListItems from './components/ListItems';
import Login from './components/Login';
import pic6 from './static/images/pic6.jpg'
import Main from './components/Main';
import { useMediaQuery } from 'react-responsive'
import Logout from './components/Logout';
import { useSelector, useDispatch, Provider } from 'react-redux'
import AnimalTest from './components/AnimalTest';



axios.defaults.withCredentials = true

const App = () => {

  const [loading, setLoading] = useState(false)
  const auth = useSelector(state => state.Auth);


  return (

    <div>
      <div className="Topbar">
        <Topbar />
        <AnimalTest />
      </div>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/FormInput" component={FormInput} />
        <Route path="/ListItems" component={ListItems} />
        <Route path="/login" component={Login} />
        <Route path="/Logout" component={Logout} />
      </BrowserRouter>
    </div>

  );

}


export default App;
