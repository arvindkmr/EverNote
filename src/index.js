import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import App from './App';

firebase.initializeApp({
    apiKey: "AIzaSyBEBLk6npHaRPYXgxH7BmnxDKAEFbcmirM",
    authDomain: "evernote-2a416.firebaseapp.com",
    projectId: "evernote-2a416",
    storageBucket: "evernote-2a416.appspot.com",
    messagingSenderId: "808952822727",
    appId: "1:808952822727:web:6393077548f4d7a23b37e2"
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
