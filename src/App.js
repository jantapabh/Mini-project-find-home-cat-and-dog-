import React, { Component } from 'react';
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
import { useMediaQuery } from 'react-responsive'
import Logout from './components/Logout';
import Contact from './components/Contact';
import fire from './config/fire';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      user: {},

    }

  }

  componentDidMount(){

    this.authListener();
  }

  authListener(){

    fire.auth().onAuthStateChanged((user) => {

      console.log(user);

      if(user){

        this.setState({user});
       // localStorage.setItem('user', user.uid);

      }else{

        this.setState({user: null});
      //  localStorage.removeItem('user')

      }
    });
  }

render(){
  
  return (
    <div>
      <div className="Topbar">
        <Topbar />
        {this.state.user ? (<Main /> ) : (<Login />)}
      </div>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/FormInput" component={FormInput} />
          <Route path="/ListItems" component={ListItems} />
          <Route path="/Register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/Logout" component={Logout} />
          <Route path="/Contact" component={Contact} />
        </BrowserRouter>
    </div>

  );

}
}

export default App;
