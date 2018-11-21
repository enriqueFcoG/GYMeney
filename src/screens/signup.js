import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, 
        TextInput,Image, StatusBar, ScrollView, 
        TouchableHighlight, Picker} from 'react-native';
//import default from '../../../../../../.cache/typescript/2.6/node_modules/@types/atob';

import ImagePicke from 'react-native-image-picker';


const messageSHow = () => {

}
 class RoutineMenu extends Component {
    constructor(){
      super()

      this.state={
        sexo: 'M',
        pathImage: ''
      }

      this.showImage = this.showImage.bind(this)
    }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#273238',
    },
    headerTintColor: '#fff',
  };

showImage(){
  const options = {
    title: 'selecciona',
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
        });
      }
  })
}

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
     backgroundColor="#273238"
     barStyle="light-content"
   />
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
              placeholder="Full name" />
        <View style={{flexDirection: 'row'}}>
        <TextInput style={{width: 150}} 
              underlineColorAndroid="#83C587"
              placeholderTextColor='#83C587' 
              placeholder="Age"/>
          <Picker
              selectedValue={this.state.sexo}
              style={styles.pickerSexo}
              onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
            <Picker.Item label="Man" value="M" />
            <Picker.Item label="Woman" value="W" />
          </Picker>  

          
        </View>      
          
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="#83C587"
              placeholderTextColor='#83C587' 
              placeholder="Email"/>

            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="#83C587"
              placeholderTextColor='#83C587' 
              placeholder="Confirm email"/>

            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="#83C587" 
              placeholderTextColor='#83C587'
              placeholder="Password"
              secureTextEntry={true}/>

              </ScrollView>
              <TouchableHighlight
                style={styles.btnSignup}
                
                >
          <Button 
              color= '#273238'
              title="Sign Up"
              onPress={() => this.props.navigation.navigate('NuevoPlan')}
            /> 
        </TouchableHighlight>
             
            
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