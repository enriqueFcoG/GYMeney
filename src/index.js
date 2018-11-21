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

import Login from './src/screens/login';
import Sign_up from './src/screens/signup';
import RoutineMenu from './src/screens/routine';
import Workout from './src/screens/workout';
import Plan from './src/screens/plan';
import Drawernav from './src/screens/menus/drawernav';
import Begin from './src/screens/begin';
import Dietplan from './src/screens/dietplan';

class HomeScreen extends Component {
constructor(){
  super()
  this.state = {
    contador : 0,
    usuario: "",
    clave: ""
  }
  this.state.colorTexto = {
    color:'white'
  }
  this.handleChangeText = this.handleChangeText.bind(this)
  this.gymLogin = this.gymLogin.bind(this)

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
              onPress={this.gymLogin}
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
              onPress={(ingresar)}
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
      Login: Login,
      Registro: Sign_up,
      NuevoPlan: Begin,
      Rutina: RoutineMenu,
      Workout: Workout,
      Plan: Plan,
      Menu: Drawernav,
      Dieta: Dietplan

    },{initialRouteName: 'Home',},
  );
  
  export default class App extends Component {
    render() {
      return <RootStack/>;
    }
  }


