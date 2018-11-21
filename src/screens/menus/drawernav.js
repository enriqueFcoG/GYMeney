import React,{Component} from 'react';
import {Platform, View, SafeAreaView,Dimensions , StyleSheet, Text, ScrollView,StatusBar, Image} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import Plan from '../plan';
import Histories from '../histories';
import Routine from '../routine';
import Login from '../logout';

class Drawernav extends Component{
    static navigationOptions = {
        header: null
      };
    render(){
        return(        

            <ProfileMenu/>

        );
    }
}
const customMenu = (props) =>(
    <SafeAreaView style={styles.safeStyle}>
        <View style={{height:150, alignItems:'center'}}>
            
                <Image source={require('../../img/orugita.jpg')} style={styles.profileImage}/>
            
        </View>
        <ScrollView>
            <View style={{alignItems:'center'}}>
                <Text style={styles.userInfoText}>Marysol Torrez Padila</Text>
                <Text style={styles.userInfoText}>25 años</Text>
                <Text style={styles.userInfoText}>160 cm</Text>
                <Text style={styles.userInfoText}>65 Kg</Text>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)

const ProfileMenu = createDrawerNavigator({
    Plan: Plan,
    Histories: Histories,
    Logout: Login
},{
    contentComponent: customMenu,
    contentOptions: {
        activeTintColor: '#83C587'
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeStyle: {
        flex: 1
    },
    profileImage: {
        marginTop: 20,
        width: 120,
        height: 120,
        borderRadius: 60,
        shadowRadius: 10,
        borderColor: '#83C587',
    },
    userInfoText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#83C587'
      
    }
});

export default Drawernav;