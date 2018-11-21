import React,{Component} from 'react';
import {Platform, View, TextInput, StyleSheet, Text, ScrollView,StatusBar} from 'react-native';
import { Icon } from 'native-base';

class Plan extends Component{
    static navigationOptions = {
        title: 'Current Plan',
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
                <Text style={styles.welcome}>1/18</Text>
                <Text style={styles.subtitle}>Weaks</Text>
            </View>
            <View style={styles.contenido}>
             <ScrollView>   
              <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>
                    <Text style={styles.dayTextStyle}>
                        S
                    </Text>
                </View>
                
                <View style={{flex: 1}} >
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Comidas</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>6</Text>
                    <Text style={styles.daysActivities}>Ejercicios</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>1520</Text>
                    <Text style={styles.daysActivities}>Calorias</Text>
                </View>
                </View>

                <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>
                    <Text style={styles.dayTextStyle}>
                        M
                    </Text>
                </View>
                
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Comidas</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Ejercicios</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>1520</Text>
                    <Text style={styles.daysActivities}>Calorias</Text>
                </View>
                </View>

                <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>
                    <Text style={styles.dayTextStyle}>
                        W
                    </Text>
                </View>
                
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Comidas</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Ejercicios</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>1520</Text>
                    <Text style={styles.daysActivities}>Calorias</Text>
                </View>
                </View>

                <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>
                    <Text style={styles.dayTextStyle}>
                        T
                    </Text>
                </View>
                
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Comidas</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Ejercicios</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>1520</Text>
                    <Text style={styles.daysActivities}>Calorias</Text>
                </View>
                </View>

                <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>
                    <Text style={styles.dayTextStyle}>
                        F
                    </Text>
                </View>
                
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Comidas</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Ejercicios</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>1520</Text>
                    <Text style={styles.daysActivities}>Calorias</Text>
                </View>
                </View>

                <View style={styles.dayBox}>
                <View style={styles.dayTextBox}>
                    <Text style={styles.dayTextStyle}>
                        S
                    </Text>
                </View>
                
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Comidas</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>5</Text>
                    <Text style={styles.daysActivities}>Ejercicios</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.numberText}>1520</Text>
                    <Text style={styles.daysActivities}>Calorias</Text>
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
        height: 70
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

export default Plan;