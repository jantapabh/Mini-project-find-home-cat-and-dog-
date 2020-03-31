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
import Main from './components/Main';



const App = () => {

  return (
    <div>
      <div className="Topbar">
        <Topbar />
      </div>
      <div className="Footer">
       <div>
     content
         </div>
      </div>
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
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
