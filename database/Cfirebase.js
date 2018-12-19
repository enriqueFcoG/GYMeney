import firebase from 'react-native-firebase';
import React, {Component} from 'react';

const config = {
    apiKey: "AIzaSyBSbFeeMuTLQ5fBAy-5EVKTBxtNO6mSmjA",
    authDomain: "catest-65edb.firebaseapp.com",
    databaseURL: "https://catest-65edb.firebaseio.com",
    projectId: "catest-65edb",
    storageBucket: "catest-65edb.appspot.com",
    messagingSenderId: "714755807875"
  };

  export default class Cfirebase {
      static f = firebase.initializeApp(config);
      static init(){
      }
  }