import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput,Image, 
        StatusBar, ScrollView, TouchableHighlight, Picker } from 'react-native';
//import default from '../../../../../../.cache/typescript/2.6/node_modules/@types/atob';
import ImagePicke from 'react-native-image-picker';
import Cfirebase from '../../database/Cfirebase';



import RNFetchBlob from 'react-native-fetch-blob';
import Helpers from '../../database/helpers';

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob


const uploadImage = (uri, imageName, mine = 'image/jpg') => {
  return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS ==='ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null
      const imageRef = Cfirebase.f.storage().ref('images').child(imageName)
      fs.readFile(uploadUri, 'base64')
          .then((data) => {
              return Blob.build(data, {type: `${mine};BASE64`})
          })
          .then((blob) =>{
              uploadBlob = blob
              return imageRef.put(uri, {contentType: mine })
          })
          .then(() => {
              uploadBlob.close()
              return imageRef.getDownloadURL()
          })
          .then((url) => {
              resolve(url)
          })
          .catch((error) => {
              reject(error)
          })
  })
}

const guardarCalorias =(cd) =>{
  alert(cd)
}


const grasa_corporal = 0
const grasa_basal = 0
const tipo_sexo = 0

 class RoutineMenu extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#273238',
    },
    headerTintColor: '#fff',
  };


  constructor(){
    super()

    this.state={
      intensity:"Light",
      pathImage: '',
      errorMessage: '',
      conditionLevel: '',
      imc: '',
      peso: '',
      estatura: '',
      edad_calculo: '',
      genero_calculo: '',
      objetivo: '',
      calorias_diarias: ''
    }

    this.showImage = this.showImage.bind(this)
    this.saveImage = this.saveImage.bind(this)
  }
  
  showImage(){
    const options = {
      title: 'selecciona',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    ImagePicke.launchCamera(options,(response) =>{
      console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
          this.setState({
            pathImage: response.uri,
          });
        }
    })
  }

  define_genero(){
    let e = 0
    let g = 0     
      var u = Cfirebase.f.auth().currentUser

      Helpers.getAge(u.uid,(edad)=>{
        e = edad
      })
      Helpers.getGender(u.uid,(gender)=>{
        g = gender
      })
      let indiceMasaCorporal = 0
      let indiceGrasaCorporal = 0
      let masamagra = 0
      let gb = 0
        indiceMasaCorporal = this.state.peso / ((this.state.estatura/100) * (this.state.estatura/100))
        indiceGrasaCorporal = (1.2 * indiceMasaCorporal) + (0.23 * e) - 5.4 
        masamagra = ((100 - indiceGrasaCorporal )/100)* this.state.peso
        gb = (9.56 * this.state.peso) + (1.85 * this.state.estatura) - (4.68 * e) + 665
        gb = (9.56 * this.state.peso) + (1.85 * this.state.estatura) - (4.68 * e) + 665 
      

      switch (this.state.objetivo) {
        case "1":
          gb = gb - 200  
          break;
        case "3":
          gb = gb *1.725
          break;      
        default:
          break;
      }
       //Helpers.generateCalories(u.uid,this.state.peso,this.state.estatura,this.props.navigation.state.params.p_edad,this.props.navigation.state.params.p_genero,this.state.objetivo)
        uploadImage(this.state.pathImage, `${u.uid}p1.jpg`)
         .then((responseData) => {
          Helpers.savePlan(u.uid,this.state.estatura,this.state.peso,this.state.objetivo,gb.toFixed(2),responseData)
          this.props.navigation.navigate("Menu")
             
         }).catch()
         .done()
       //})   
    
     
        
  }

  testfunction(){
    alert("pos hora")
  }
  

  saveImage(){
    alert("entro aqui")
   /* var u = Cfirebase.f.auth().currentUser    
    this.state.pathImage ?
    uploadImage(this.state.pathImage, `${u.uid}p1.jpg`)
    .then((responseData) => {
      alert("IMC: "+indiceMasaCorporal.toFixed(2)+"\n"+"IGC: "+indiceGrasaCorporal.toFixed(2)+"\n"+"Masa magra: "+masamagra.toFixed(2)+"\n"+"Calorias diarias: "+gb.toFixed(2))
      Helpers.savePlan(u.uid,this.state.estatura,this.state.peso,this.state.objetivo,gb,responseData)
      this.props.navigation.navigate("Menu")
        
    }).catch(alert("error"))
    .done()
    : null*/
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
     backgroundColor="#273238"
     barStyle="light-content"
   />
         <View style={{flex: 1, backgroundColor: '#BDBDBD',alignItems:'center'}}>
          <View >
            <TouchableHighlight onPress={this.showImage}>
            {this.state.pathImage ? <Image source={{uri: this.state.pathImage}} style={{width: 400,height:150}}/> : <Text style={styles.welcome}>¡Click aqui para tomar una imagen!</Text> }
             
             </TouchableHighlight>
           </View>
         </View>
         <View style={{flex: 3, backgroundColor: 'white'}}>

         <View style={styles.container}>
            <ScrollView>
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid='#83C587'
              placeholderTextColor='#83C587'
              onChangeText={(estatura) => {this.setState({estatura})}}
              placeholder="Estatura(cm)" />
          
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="#83C587"
              placeholderTextColor='#83C587'
              onChangeText={(peso) => {this.setState({peso})}} 
              placeholder="peso(kilos)"/>

            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="#83C587"
              placeholderTextColor='#83C587'
              onChangeText={(imc) => {this.setState({imc})}} 
              placeholder="IMC(opcional)"/>  

          <Text>Objetivo</Text>
          <Picker
              selectedValue={this.state.objetivo}
              style={styles.pickerSexo}
              onValueChange={(itemValue, itemIndex) => this.setState({objetivo: itemValue})}>
            <Picker.Item label="Bajar" value="1" />
            <Picker.Item label="Mantenerme" value="2" />
            <Picker.Item label="Aumentar" value="3" />
          </Picker>  


              </ScrollView>
              <TouchableHighlight
                style={styles.btnSignup}
                
                >
          <Button 
              color= '#273238'
              title="Generate my plan"
              //onPress={() => this.props.navigation.navigate('Menu')}
              onPress={this.define_genero.bind(this)}
            /> 
        </TouchableHighlight>
             
            
        </View>
         </View>
     
      </View>
    );
  }
 
}

const ingresar = () =>{
 
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
  profileImage: {
    marginTop: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    shadowRadius: 10,
    borderColor: '#83C587',
},
  circle: {
    width: 150,
    height: 150,
    borderRadius: 60
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
  btnSignup: {
    width: 300,
    height: 50
  },
});


export default RoutineMenu;