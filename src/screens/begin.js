import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput,Image, 
        StatusBar, ScrollView, TouchableHighlight, Picker } from 'react-native';
//import default from '../../../../../../.cache/typescript/2.6/node_modules/@types/atob';
import ImagePicke from 'react-native-image-picker';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
      pathImage: ''
    }

    this.showImage = this.showImage.bind(this)
  }
  
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
         <View style={{flex: 1, backgroundColor: '#BDBDBD',alignItems:'center'}}>
          <View style={styles.circle}>
            <TouchableHighlight onPress={this.showImage}>
            {this.state.pathImage ? <Image source={{uri: this.state.pathImage}} style={styles.profileImage}/> : <Text style={styles.welcome}>Click! to select a picture</Text> }
             
             </TouchableHighlight>
           </View>
         </View>
         <View style={{flex: 3, backgroundColor: 'white'}}>

         <View style={styles.container}>
            <ScrollView>
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid='#83C587'
              placeholderTextColor='#83C587'
              placeholder="Height" />
          
            <TextInput style={styles.textosLogin} 
              underlineColorAndroid="#83C587"
              placeholderTextColor='#83C587' 
              placeholder="Weight"/>

          <Picker
              selectedValue={this.state.intensity}
              style={styles.pickerSexo}
              onValueChange={(itemValue, itemIndex) => this.setState({intensity: itemValue})}>
            <Picker.Item label="Light" value="L" />
            <Picker.Item label="Moderate" value="M" />
            <Picker.Item label="Vigorous" value="V" />
          </Picker>  


              </ScrollView>
              <TouchableHighlight
                style={styles.btnSignup}
                
                >
          <Button 
              color= '#273238'
              title="Generate my plan"
              onPress={() => this.props.navigation.navigate('Menu')}
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