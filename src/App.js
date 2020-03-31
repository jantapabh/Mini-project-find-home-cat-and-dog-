import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import { Switch } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInput from './components/FormInput';
import ListItems from './components/ListItems';
import Login from './components/Login';
import Register from './components/Resgister';
import pic6 from './static/images/pic6.jpg'



const App = () => {

  return (

    <div>
      <div className="Topbar">
        <Topbar />
      </div>
      <div>
       <img className="img" src="https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg" />
      </div>
      <div className="Footer">
       
        </div>
      <div>
        <BrowserRouter>
          <Route exact path="/" />
          <Route path="/FormInput" component={FormInput} />
          <Route path="/ListItems" component={ListItems} />
          <Route path="/Register" component={Register} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </div>

  );

}

export default App;
