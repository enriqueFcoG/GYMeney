import React,{Component} from 'react';
import {Platform, View, TextInput, StyleSheet, 
        Text, ScrollView,StatusBar, Image} from 'react-native';
import { Icon } from 'native-base';

class Histories extends Component{
    static navigationOptions = {
        title: 'Historial',
        header: null,
        drawerIcon : ({tintColor}) => (
            <Icon name="home" style={{fontSize: 24, color: tintColor}}/>
        )
      };
    render(){
        return(
            
            <View style={styles.container}>
            <StatusBar
            backgroundColor="#273238"
            barStyle="light-content"
            />
            <View style={{flex: 1, backgroundColor: '#273238'}}>
                <Text style={styles.welcome}>135</Text>
                <Text style={styles.subtitle}>Workout days</Text>
            </View>
            <View style={styles.contenido}>

             <ScrollView>   
              <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>                    
                    <Image source={require('../img/progression1.jpg')} style={{ width: 150, height: 150}}/>
                </View>                
                
                <View style={{flex: 1}} >
                    <Text style={styles.welcome}>1 - 40 </Text>
                    <Text style={styles.daysActivities}>days</Text>
                </View>                
              </View>


              <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>                    
                    <Image source={require('../img/progression2.jpg')} style={{ width: 150, height: 150}}/>
                </View>                
                
                <View style={{flex: 1}} >
                    <Text style={styles.welcome}>41 - 90</Text>
                    <Text style={styles.daysActivities}>days</Text>
                </View>                
              </View>

              <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>                    
                    <Image source={require('../img/progression3.jpg')} style={{ width: 150, height: 150}}/>
                </View>                
                
                <View style={{flex: 1}} >
                    <Text style={styles.welcome}>91 - 135</Text>
                    <Text style={styles.daysActivities}>days</Text>
                </View>                
              </View>

                




                </ScrollView>  
            </View>
            </View>

        );

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        marginTop: 30,
        color: '#83c587'
    },
    subtitle : {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        marginTop: 10,
        color: '#83c587'
    },
    contenido : {
        flex: 3, 
        backgroundColor: '#E0E1E0'
    },
    dayBox : {      
        
        flexDirection:'row',
        borderWidth: 0,
        backgroundColor: 'white',
        borderRadius: 0,
        borderColor: '#505b62',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        alignItems: 'stretch',
        height: 150
    },
    dayTextBox:{
        padding: 0,
        alignItems: 'center'
      
    },
    dayTextStyle: {
        color: '#000a12',
        fontSize: 25,
        marginLeft: 5,
        marginRight: 5,
        width: 50,
        alignItems: 'center',
    },
    numberText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000a12'
      
    },
    daysActivities:{
        color: '#000a12',
        textAlign: 'center'
    }


});

export default Histories;