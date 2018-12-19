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
//import firebase from 'react-native-firebase';
import Cfirebase from './database/Cfirebase';

import { AccessToken, LoginManager } from 'react-native-fbsdk';
  const facebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw new Error('User cancelled request'); // Handle this however fits the flow of your app
    }
    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
    }
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
    console.info(JSON.stringify(currentUser.user.toJSON()))
  } catch (e) {
    console.error(e);
  }
}
class HomeScreen extends Component {
constructor(){
  super()
  this.state = {
    contador : 0,
    usuario: "",
    clave: "",
    mensaje: '',
    errorMessage: ''
  }
  this.state.colorTexto = {
    color:'white'
  }
  this.handleChangeText = this.handleChangeText.bind(this)
  this.gymLogin = this.gymLogin.bind(this)
  this.addMessage = this.addMessage.bind(this);
  this.crear_usuario = this.crear_usuario.bind(this);
  this.login_user = this.login_user.bind(this)
  //this._fbLogin = this._fbLogin.bind(this);

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




addMessage () {
  if(!this.state.mensaje) return;



Cfirebase.f.database().ref('mensajes/').set({
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



crear_usuario(){
  Cfirebase.f.auth().createUserWithEmailAndPassword(this.state.usuario,this.state.clave)
  .then(
    //() => this.props.navigation.navigate("Menu")
    alert(this.state.usuario+ "\n"+ this.state.clave)
  )
  .catch(error => this.setState({ errorMessage: error.message}))

  
}

test_function(){
    this.props.navigation.navigate("Menu")
   
}

login_user(){  
  if(this.state.usuario != '' && this.state.clave !=''){
    Cfirebase.f.auth().signInWithEmailAndPassword(this.state.usuario,this.state.clave)
    .then(
      () =>  this.props.navigation.navigate("Menu")
    )
    .catch(function(){
      alert("Usuario y/o contraseña incorrectos")
    })
  }else{
    alert("Ingrese sus credenciales")
  }


}

componentDidMount(){
  Cfirebase.f.auth().onAuthStateChanged(function(user) {
    if (user) {
      () => this.props.navigation.navigate("Menu")      
    } else {
    }
  });
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
        
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./src/img/gymeney_logo.png')} style={styles.logoGYM}/>
        </View>
        <TextInput style={styles.textosLogin}           
          underlineColorAndroid='#495B62'
          placeholder="Username or email"
          placeholderTextColor='#495B62'
          //onChangeText={this.handleChangeText}
          ref={input =>this._usuario = input}
          onChangeText={(usuario) => this.setState({usuario})}
          value={this.state.usuario}
          />
          
        <TextInput           
          style={styles.textosLogin} 
          placeholderTextColor='#495B62'
          underlineColorAndroid="#495B62" 
          placeholder="contraseña"
          onChangeText={(clave) => this.setState({clave})}
          secureTextEntry={true}
          ref={input =>this._contrasena = input}
          />
          <View style={styles.btnLogin}>
            <Button 
              color= '#83C587'
              title="Log In"
              //onPress={() => this.props.navigation.navigate('Menu')}
              onPress={this.login_user}
            />  
          </View>
        <Text style={styles.forgotText} 
          onPress={(metodochido)}>¿Olvidaste tu contraseña?
        </Text>  

         <Text style={styles.textoOR} >O</Text>
           <View style={styles.btnFacebook}>
            <Button 
              color="#3b5998"
              title="inicia sesion con Facebook"
              onPress={(facebookLogin)}
            />        
          </View>
          <Text style={[styles.forgotText, this.state.colorTexto]} 
          onPress={()=> this.props.navigation.navigate('Registro')}>¿Nuevo usuario? Registrate
        </Text> 
        </ScrollView>        
      </View>

      
      );
    }
  }

  

  const metodochido = () =>{
    alert("holanena");
    ingresar();
  }

  const ingresar = () =>{
    alert("faste");
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

