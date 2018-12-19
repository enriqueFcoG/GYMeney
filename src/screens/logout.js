import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        } from 'react-native';

import Login from '../../login';
import firebase from 'react-native-firebase';


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#273238',
    }
  });

  
  export default class Logout extends Component {

    componentDidMount(){
     firebase.auth().signOut().then(function() {
        
      }).catch(function(error) {
        
      });
    }

    render() {
      return <Login/>;
    }
  }