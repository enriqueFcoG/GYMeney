import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput,Image, StatusBar, ScrollView} from 'react-native';
//import default from '../../../../../../.cache/typescript/2.6/node_modules/@types/atob';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
 class RoutineMenu extends Component<Props> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#607D8B',
    },
    headerTintColor: '#fff',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
     backgroundColor="#455A64"
     barStyle="light-content"
   />
         <View style={{flex: 1, backgroundColor: '#BDBDBD'}}>
         <Text style={styles.welcome}>Click! to select a picture</Text>
         </View>
         <View style={{flex: 3, backgroundColor: 'white'}}>

         <View style={styles.container}>
            <ScrollView>
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid='green'
              placeholder="Full name" />
          
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="green" 
              placeholder="Email"/>

            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="green" 
              placeholder="Confirm email"/>

            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="green" 
              placeholder="Password"/>

              </ScrollView>
              <View style={styles.btnLogin}>
              <Button 
              color= '#448AFF'
              title="Sign Up"
              onPress={() => this.props.navigation.navigate('Details')}
            /> 
            </View>
        </View>
         </View>
     
      </View>
    );
  }
 
}

const ingresar = () =>{
  alert("Tonto")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
    color: 'white'
  },
  textosLogin: {
    width: 300,
    color: 'green',
    justifyContent: 'center',
    padding: 20,
    
  },
  formrutina: {
    alignItems: 'stretch',
    backgroundColor: 'red',
    
  },
  btnLogin: {
    width: 300,
    height: 150,
  },
});


export default RoutineMenu;