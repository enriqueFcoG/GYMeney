import React,{Component} from 'react';
import {Platform, View, Alert, Button, TouchableHighlight, TouchableOpacity ,TextInput, StyleSheet, Text, ScrollView,StatusBar, Image} from 'react-native';
import { Icon } from 'native-base';
import firebase from 'react-native-firebase';
import {Fonts} from '../utils/Fonts';
import Helpers from '../../database/helpers';

var Semana = "1/18";
var dias = ["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];
var comidas = [5,3,5,2,5,4,5];
var ejecicios = [2,4,3,5,4,2,3];
var calorias = [1000,2220,1520,2600,1520,1820,1520];


class Dias extends Component {
    render(){
        return(
            <View style={styles.row}>
                <Text style={styles.textLine}>{dias[1]}</Text>
                <Text style={styles.textLine}>{comidas[1]}</Text>
                <Text style={styles.textLine}>{ejecicios[1]}</Text>
                <Text style={styles.textLine}>{calorias[1]}</Text>
              </View>
        )
    }
}
class Plan extends Component{
    static navigationOptions = {
        title: 'Current Plan',
        header: null,
        drawerIcon : ({tintColor}) => (
            <Icon name="home" style={{fontSize: 24, color: tintColor}}/>
        )
      };

     constructor(props){
         super(props)

         this.state = {
             email: '',
             calorias_diarias: '',
             stores: ''
         }

     }

     async componentWillMount(){
      var user = await firebase.auth().currentUser   
      try{
        Helpers.getCalories(user.uid,(c)=>{
          
          this.setState({
            calorias_diarias : c
          })
        })
      }catch(error){

      }
     }
     
     getUserEmail(){
         var user = firebase.auth().currentUser;
         if(user != null){
             user.providerData.forEach(function(profile){
                 this.setState({
                     email: profile.email
                 })
             })
             
         }
     }
     componentDidMount(){
        this.getUserEmail.bind(this)
         
     }
    render(){
      const { navigate } = this.props.navigation;
        return(           

            <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
              <Text style={[styles.Title]}>{Semana}</Text>
              <Text style={[styles.Subtitle]}>Semanas</Text>
            </View>
            <View style={[styles.box,styles.row, styles.box2]}>
              <View><Image style={[styles.imgStyle]} source={require('../img/calendar-page-empty.png')}/></View>
              <View><Image style={[styles.imgStyle]}source={require('../img/restaurant.png')}/></View>
              <View><Image style={[styles.imgStyle]}source={require('../img/barbell.png')}/></View>
              <View><Image style={[styles.imgStyle]}source={require('../img/count-calories.png')}/></View>
            </View>
            <View style={[styles.box, styles.box4]}>
            <TouchableOpacity
                 onPress={(test)}
                 style={[styles.row]}>                              
                <Text style={[styles.textLine]}>{dias[0]}</Text>                
                <Text style={[styles.textLine]}>{comidas[0]}</Text>
                <Text style={[styles.textLine]}>{ejecicios[0]}</Text>
                <Text style={[styles.textLine]}>{this.state.calorias_diarias}</Text>
                             
            </TouchableOpacity>
  
              <TouchableOpacity style={[styles.row]} onPress={(testm)}>
                <Text style={[styles.textLine]}>{dias[1]}</Text>
                <Text style={[styles.textLine]}>{comidas[1]}</Text>
                <Text style={[styles.textLine]}>{ejecicios[1]}</Text>
                <Text style={[styles.textLine]}>{this.state.calorias_diarias}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.row]} onPress={(testmi)}>              
                <Text style={[styles.textLine]}>{dias[2]}</Text>
                <Text style={[styles.textLine]}>{comidas[2]}</Text>
                <Text style={[styles.textLine]}>{ejecicios[2]}</Text>
                <Text style={[styles.textLine]}>{this.state.calorias_diarias}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.row]} onPress={(testj)}>
                <Text style={[styles.textLine]}>{dias[3]}</Text>
                <Text style={[styles.textLine]}>{comidas[3]}</Text>
                <Text style={[styles.textLine]}>{ejecicios[3]}</Text>
                <Text style={[styles.textLine]}>{this.state.calorias_diarias}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.row]} onPress={(testv)}>
                <Text style={[styles.textLine]}>{dias[4]}</Text>
                <Text style={[styles.textLine]}>{comidas[4]}</Text>
                <Text style={[styles.textLine]}>{ejecicios[4]}</Text>
                <Text style={[styles.textLine]}>{this.state.calorias_diarias}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.row]} onPress={(tests)}>
                <Text style={[styles.textLine]}>{dias[5]}</Text>
                <Text style={[styles.textLine]}>{comidas[5]}</Text>
                <Text style={[styles.textLine]}>{ejecicios[5]}</Text>
                <Text style={[styles.textLine]}>{this.state.calorias_diarias}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.row]}>
                <Text style={[styles.textLine]}>{dias[6]}</Text>
                <Text style={[styles.textLine]}>{comidas[6]}</Text>
                <Text style={[styles.textLine]}>{ejecicios[6]}</Text>
                <Text style={[styles.textLine]}>{this.state.calorias_diarias}</Text>
              </TouchableOpacity>
            </View>
        </View>

        );

    }


}

const test = () =>{
  Alert.alert("lunes", 'Dieta y ejercicio del dia lunes', [
    {text: 'Cerrar', onPress: () => console.log('cerrar pressed')},
    {text: 'Ejercicio', onPress: ejercicios, style: 'cancel'},
    {text: 'Dieta', onPress: desayuno},
  ],
  { cancelable: false })
  
}
const testm = () =>{
  Alert.alert("Martes", 'Dieta y ejercicio del dia martes', [
    {text: 'Cerrar', onPress: () => console.log('cerrar pressed')},
    {text: 'Ejercicio', onPress: ejercicios, style: 'cancel'},
    {text: 'Dieta', onPress: desayuno},
  ],
  { cancelable: false })
  
}

const testmi = () =>{
  Alert.alert("Miercoles", 'Dieta y ejercicio del dia miercoles', [
    {text: 'Cerrar', onPress: () => console.log('cerrar pressed')},
    {text: 'Ejercicio', onPress: ejercicios, style: 'cancel'},
    {text: 'Dieta', onPress: desayuno},
  ],
  { cancelable: false })
  
}

const testj = () =>{
  Alert.alert("Jueves", 'Dieta y ejercicio del dia jueves', [
    {text: 'Cerrar', onPress: () => console.log('cerrar pressed')},
    {text: 'Ejercicio', onPress: ejercicios, style: 'cancel'},
    {text: 'Dieta', onPress: desayuno},
  ],
  { cancelable: false })
  
}

const testv = () =>{
  Alert.alert("Viernes", 'Dieta y ejercicio del dia viernes', [
    {text: 'Cerrar', onPress: () => console.log('cerrar pressed')},
    {text: 'Ejercicio', onPress: ejercicios, style: 'cancel'},
    {text: 'Dieta', onPress: desayuno},
  ],
  { cancelable: false })
  
}
const tests = () =>{
  Alert.alert("Sabado", 'Dieta y ejercicio del dia sabado', [
    {text: 'Cerrar', onPress: () => console.log('cerrar pressed')},
    {text: 'Ejercicio', onPress: ejercicios, style: 'cancel'},
    {text: 'Dieta', onPress: desayuno},
  ],
  { cancelable: false })
  
}

const ejercicios = () =>{
  Alert.alert('Rutina', 'Ejercicio  Series  Repeticiones \n\nSquats \t3\t 12\nEscuadras\t2\t14',[
    {text: 'Ejercicios', onPress: () => alert('Ask me later pressed')},
    {text: 'Siguiente', onPress: colacion1, style: 'cancel'},
    {text: 'cerrar', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false })
}

const desayuno = () =>{
  Alert.alert('Desayuno', 'hora:8:00am \n\nalimento:1 porcion de verdura, 2 porciones de fruta, 2 porciones de ceral, 1 porción de AOA, 1 porcion de aceites y grasas',[
    {text: 'Cerrar', onPress: () => console.log('Ask me later pressed')},
    {text: 'Ejercicios', onPress: ejercicios, style: 'cancel'},
    {text: 'Siguiente', onPress: colacion1},
  ],
  { cancelable: false })
}

const colacion1 = () =>{
  Alert.alert('Colacion', 'hora:12:00pm \n\n1 porcion de verdura, 1 porcion de fruta, 1 porcion de ceral, 1 porcion de lacteos',[
    {text: 'Cerrar', onPress: () => console.log('Ask me later pressed')},
    {text: 'Anterior', onPress: desayuno, style: 'cancel'},
    {text: 'Siguiente', onPress: comida},
  ],
  { cancelable: false })
}

const comida = () =>{
  Alert.alert('Comida', '	hora:3:00pm \n2 porciones de verduras, 1 porcion de fruta, 2 porciones de ceral, 3 porción de AOA, 2 porcion de aceites y grasas',[
    {text: 'Cerrar', onPress: () => console.log('Ask me later pressed')},
    {text: 'Anterior', onPress: colacion1, style: 'cancel'},
    {text: 'Siguiente', onPress: colacion2},
  ],
  { cancelable: false })
}

const colacion2 = () =>{
  Alert.alert('Colacion', 'hora:3:00pm \n2 porciones de verduras, 1 porcion de fruta, 2 porciones de ceral, 3 porción de AOA, 2 porcion de aceites y grasas',[
    {text: 'Cerrar', onPress: () => console.log('Ask me later pressed')},
    {text: 'Anterior', onPress: comida, style: 'cancel'},
    {text: 'Siguiente', onPress: cena},
  ],
  { cancelable: false })
}

const cena = () =>{
  Alert.alert('cena', 'hora:9:00pm \n1 porcion de verduras, 1 porcion de ceral, 2 porciones de A.O.A, 1 porcion de leche, 1 porcion de leguminosas, 1 porcion de aceite y grasas',[
    {text: 'Cerrar', onPress: () => console.log('Ask me later pressed')},
    {text: 'Anterior', onPress: colacion2, style: 'cancel'},
    {text: 'Ejercicios', onPress: ejercicios},
  ],
  { cancelable: false })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
      },
      Title:{
        fontFamily:Fonts.OpenSans,
        marginTop: 10,
        fontSize: 50,
        textAlign:'center',
        color:'#98BAA0'
      },
      Subtitle:{
        fontFamily:Fonts.OpenSans,
        textAlign:'center',
        color:'#98BAA0'
      },
      Subtitlesub:{
        fontSize: 10,
        textAlign:'center',
        margin:5
      },
      textLine:{
        margin:10,
        fontFamily:Fonts.OpenSans,
        textAlign:'center',
        color:'#000000',
        fontSize:20
      },
      imgStyle:{
        margin:5,
        width:50,
        height:50,
      },
      box: {
        flex:1
      },
      box1: {
        flex:2,
        backgroundColor: '#273238',
      },
      box2: {
        //flex:1,
        backgroundColor: '#F9F9F9'
      },
      row:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      box3:{
        flex:0.4,
        backgroundColor:'#F9F9F9'
      },
      box4: {
        flex:7,
        backgroundColor: '#FFFFFF'
      },
      dia:{
        marginRight:10
      },

});

export default Plan;