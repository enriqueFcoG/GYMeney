import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, 
        TextInput,Image, StatusBar, ScrollView, 
        TouchableHighlight, Picker} from 'react-native';

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

 class RoutineMenu extends Component {
    constructor(){
      super()

      this.state={
        sexo: 'Male',
        pathImage: '',
        mensaje: '',
        age: '',
        gender: '',
        nombre: '',
        password: '',
        imagePath: '',
        imageHeight: '',
        imageWidth: '',
        email: '',
        idUser: ''
      }

      this.showImage = this.showImage.bind(this)
      this.saveUSer = this.saveUSer.bind(this)
    }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#273238',
    },
    headerTintColor: '#fff',
  };



saveUSer(){ 
  Cfirebase.f.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
      .then( this.updateUser.bind(this) )
      .catch(error => this.setState({ errorMessage: error.message}))     
}

updateUser(){
  var activeUser = Cfirebase.f.auth().currentUser
  
  this.setState({
    idUser: activeUser.uid
  })
  if(activeUser){
    activeUser.updateProfile({
      displayName: this.state.nombre,
      photoURL: this.state.pathImage
      }).then(
        this.createUser.bind(this)
        )
      .catch(function(){
      alert("Error al guardar los datos")
      })
  }
  
}

createUser(){
  var activeUser = Cfirebase.f.auth().currentUser
  Cfirebase.f.database().ref('usuarios/'+activeUser.uid).set({
    age: this.state.age,
    email: this.state.email,
    gender: this.state.sexo,
    nombre: this.state.nombre,
    password: this.state.password,
    avatar: this.state.pathImage
  }).then(

  this.saveImage.bind(this)
  )
}

saveImage(){
  this.state.pathImage ?
  uploadImage(this.state.pathImage, `${this.state.idUser}.jpg`)
  .then((responseData) => {
      Helpers.saveImageUrl(this.state.idUser,responseData)
      this.props.navigation.navigate("NuevoPlan",{p_edad: this.state.age, p_genero: this.state.gender})
      
  })
  .catch()
  .done()
  : null
}

showImage(){
  const options = {
    title: 'selecciona una opcion',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  }
  ImagePicke.showImagePicker(options,(response) =>{
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
          imageHeight: response.height,
          imageWidth: response.width
        });
      }
  })
}

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#273238"
          barStyle="light-content"/>

         <View style={{flex: 1, backgroundColor: 'white'}}>
         <View style={{height:180, alignItems:'center'}}>
            <TouchableHighlight onPress={this.showImage}>
            {this.state.pathImage ? <Image source={{uri: this.state.pathImage}} style={styles.profileImage}/> : <Image source={require('../img/profile.png')} style={styles.profileImage}/>}
                
            </TouchableHighlight>
        </View>
         </View>

         <View style={{flex: 3, backgroundColor: 'white'}}>

         <View style={styles.container}>
            <ScrollView>
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid='#83C587'
              placeholderTextColor='#83C587'
              onChangeText={(nombre) => this.setState({nombre})}
              value={this.state.nombre}
              
              placeholder="Nombre completo" />
        <View style={{flexDirection: 'row'}}>
        <TextInput style={{width: 150}} 
              underlineColorAndroid="#83C587"
              placeholderTextColor='#83C587' 
              onChangeText={(age) => this.setState({age})}
              value={this.state.age}
              
              placeholder="Edad"/>
          <Picker
              selectedValue={this.state.sexo}
              style={styles.pickerSexo}
              onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
            <Picker.Item label="Hombre" value="Male" />
            <Picker.Item label="Mujer" value="Female" />
          </Picker>  

          
        </View>      
          
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="#83C587"
              placeholderTextColor='#83C587' 
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              placeholder="Email"/>

            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="#83C587" 
              placeholderTextColor='#83C587'
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              
              placeholder="Contraseña"
              secureTextEntry={true}/>

              </ScrollView>
              <TouchableHighlight
                style={styles.btnSignup}
                
                >
          <Button 
              color= '#273238'
              title="Registrar"
              //onPress={() => navigate('NuevoPlan',{p_edad: this.state.age, p_genero: this.state.sexo})}
              onPress={this.saveUSer}
            /> 
        </TouchableHighlight>
             
            
        </View>
         </View>
     
      </View>
    );
  }
 
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
  btnSignup: {
    width: 300,
    height: 50
  },
  profileImage: {
    marginTop: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    shadowRadius: 10,
    borderColor: '#83C587',
},
pickerSexo: {
  height: 50, 
  width: 150 ,
  color:'#83C587'
}
});

export default RoutineMenu;