import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        } from 'react-native';

import Login from '../../login';


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#273238',
    }
  });

  
  export default class Logout extends Component {
    render() {
      return <Login/>;
    }
  }