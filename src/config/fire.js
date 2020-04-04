import firebase from 'firebase';


const Config = {
    apiKey: "AIzaSyCTI0l-hlveLjFy-GgykPPkW5KKlbmjLXA",
    authDomain: "cat-users-df6bd.firebaseapp.com",
    databaseURL: "https://cat-users-df6bd.firebaseio.com",
    projectId: "cat-users-df6bd",
    storageBucket: "cat-users-df6bd.appspot.com",
    messagingSenderId: "743916218663",
    appId: "1:743916218663:web:688ed1ca45043406c5a102",
    measurementId: "G-T2B1WVLMH0"
  };

  const fire = firebase.initializeApp(Config)
  export default fire;