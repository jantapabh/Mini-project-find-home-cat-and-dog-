import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import {browserHistory} from 'react-router'
import firebase from 'firebase/app';
import 'firebase/firestore'
import config from './config'
import 'firebase/firestore'


if(firebase.apps.length === 0)

  firebase.initializeApp(config)


  export const firestore = firebase.firestore()

render(
  <BrowserRouter>

    <App />

  </BrowserRouter>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
