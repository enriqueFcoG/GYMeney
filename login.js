import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        Button, 
        TextInput,
        Image, 
        StatusBar, 
        TouchableHighlight, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Sign_up from './src/screens/signup';
import RoutineMenu from './src/screens/routine';
import Workout from './src/screens/workout';
import Plan from './src/screens/plan';
import Drawernav from './src/screens/menus/drawernav';
import Begin from './src/screens/begin';
import Dietplan from './src/screens/dietplan';
import firebase from 'react-native-firebase';

import { AccessToken, LoginManager } from 'react-native-fbsdk';

// Calling the following function will open the FB login dialogue:
const facebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw new Error('User cancelled request'); // Handle this however fits the flow of your app
    }

    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    // login with credential
    const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

    console.info(JSON.stringify(currentUser.user.toJSON()))
  } catch (e) {
    console.error(e);
  }
}
const config = {
  apiKey: "AIzaSyBSbFeeMuTLQ5fBAy-5EVKTBxtNO6mSmjA",
  authDomain: "catest-65edb.firebaseapp.com",
  databaseURL: "https://catest-65edb.firebaseio.com",
  projectId: "catest-65edb",
  storageBucket: "catest-65edb.appspot.com",
  messagingSenderId: "714755807875"
};
firebase.initializeApp(config);


class HomeScreen extends Component {
constructor(){
  super()
  this.state = {
    contador : 0,
    usuario: "",
    clave: "",
    mensaje: ''
  }
  this.state.colorTexto = {
    color:'white'
  }
  this.handleChangeText = this.handleChangeText.bind(this)
  this.gymLogin = this.gymLogin.bind(this)
  this.addMessage = this.addMessage.bind(this);
  this._fbLogin = this._fbLogin.bind(this);

  setInterval(() =>{
    if(this.state.colorTexto.color == "white"){
      this.setState({
        colorTexto: {
          color: "#83C587"
        }
      })
    }else{
      this.setState({
        colorTexto: {
          color: "white"
        }
      })
    }
  },1000)  
}


_fbLogin(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  alert("login exitoso!!")
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

addMessage () {
  if(!this.state.mensaje) return;
  firebase.database().ref('mensajes/').push({
    mess: this.state.mensaje
  });

alert(this.state.mensaje)
}

gymLogin(){
const user = this._usuario._lastNativeText
const pass = this._contrasena._lastNativeText
alert("Usuario: "+ user+"\nContraseña: " + pass)
}

handleChangeText(newText){
  this.setState({
    usuario: newText
  })
}

forgotPassCount(){
  this.setState({
    contador: this.state.contador+1
  })
}

  static navigationOptions = {
    title: 'Welcome',
    header: null
  };
    render() {
      return (        
        <View style={styles.container}>
        <ScrollView style={styles.estiloScroll}>
        
        <StatusBar
        backgroundColor="#273238"
        barStyle="light-content"/>
        
        <Image source={require('./src/img/gymeney_logo.png')} style={styles.logoGYM}/>

        <TextInput style={styles.textosLogin}           
          underlineColorAndroid='#495B62'
          placeholder="Username or email"
          placeholderTextColor='#495B62'
          //onChangeText={this.handleChangeText}
          ref={input =>this._usuario = input}
          onChangeText={(mensaje) => this.setState({mensaje})}
          value={this.state.mensaje}
          />
          
        <TextInput           
          style={styles.textosLogin} 
          placeholderTextColor='#495B62'
          underlineColorAndroid="#495B62" 
          placeholder="Password"
          secureTextEntry={true}
          ref={input =>this._contrasena = input}
          />
          <View style={styles.btnLogin}>
            <Button 
              color= '#83C587'
              title="Log In"
              //onPress={() => this.props.navigation.navigate('Menu')}
              onPress={this.addMessage}
            />  
          </View>

        <Text style={styles.forgotText} 
          onPress={this.forgotPassCount.bind(this)}>Forgot your password?
        </Text>  

         <Text style={styles.textoOR} >OR</Text>
           <View style={styles.btnFacebook}>
            <Button 
              color="#3b5998"
              title="sign in with Facebook"
              onPress={(facebookLogin)}
            />        
          </View>
          <Text style={[styles.forgotText, this.state.colorTexto]} 
          onPress={()=> this.props.navigation.navigate('Registro')}>New User? Sign Up
        </Text> 
        </ScrollView>        
      </View>

      
      );
    }
  }

  const ingresar = () =>{
    alert("In process...")
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      backgroundColor: '#273238',
    },
    estiloScroll: {
      marginRight: 0,
      marginLeft: 0,
    },
    logoGYM: {
      width: 193, 
      height: 110,
      marginTop: 40,
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: '#83C587'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      marginTop:0,
    },
    logo: {
      width: 150,
      height: 150,
    },
    textosLogin: {
      width: 300,
      color: '#83C587',
      marginTop: 20,
      
    },
    forgotText: {
      fontSize:12,
      textAlign: 'center',
      marginTop: 0,
      color: '#c2c2c2',
    },
    textoOR:{
      fontSize: 15,
      textAlign: 'center',
      color: '#83C587'
    },
    btnLogin: {
      width: 300,
      color:"white",
      height: 50,
      marginTop: 50,
    },
    btnFacebook: {
      width: 300,
      height: 80,
      marginTop: 10
    }
  });
  
  
  const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Registro: Sign_up,
      NuevoPlan: Begin,
      Rutina: RoutineMenu,
      Workout: Workout,
      Plan: Plan,
      Menu: Drawernav,
      Dieta: Dietplan

    },{initialRouteName: 'Home',},
  );
  
  export default class Login extends Component {
    render() {
      return <RootStack/>;
    }
  }


