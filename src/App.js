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
import Main from './components/Main';
import { useMediaQuery } from 'react-responsive'
import Logout from './components/Logout';
import fire from './config/fire'
import { render } from '@testing-library/react';



axios.defaults.withCredentials = true

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      user: {}

    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }

    })
  }



  render() {

    if(this.state.user == null)
    {
      return(
        <div>

        <Topbar />
        <Login />
        </div>

      );

    }
  
    return (

      <div>
        <div className="Topbar">
          <Topbar />
        </div>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/FormInput" component={FormInput} />
          <Route path="/ListItems" component={ListItems} />
          <Route path="/lo gin" component={Login} />
          <Route path="/Logout" component={Logout} />
        </BrowserRouter>
      </div>

    );

  }
}


export default App;
