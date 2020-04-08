import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyBK29PZlEcHMwQsXpJpgOKd5fTErKSi8EE",
    authDomain: "fir-react-auth-97868.firebaseapp.com",
    databaseURL: "https://fir-react-auth-97868.firebaseio.com",
    projectId: "fir-react-auth-97868",
    storageBucket: "fir-react-auth-97868.appspot.com",
    messagingSenderId: "890209709881",
    appId: "1:890209709881:web:094d0f03b7b7a4188882e8",
    measurementId: "G-CF9B4J586Y"
  };

  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;