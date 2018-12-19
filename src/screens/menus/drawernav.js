import React,{Component} from 'react';
import {Platform, View, SafeAreaView,Dimensions , StyleSheet, Text, ScrollView,StatusBar, Image} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import Plan from '../plan';
import Histories from '../histories';
import Routine from '../routine';
import Login from '../logout';
import firebase from 'react-native-firebase';
import Helpers from '../../../database/helpers';


var user = firebase.auth().currentUser;
var avatar = "ke tranza"


class Infouser extends Component{
    constructor(props){
        super(props)

        this.state = {
            imagen: '../../img/profile.png',
            name: "",
            age: '',
            email: ''
        }

    }

    async componentWillMount(){
        var user = await firebase.auth().currentUser        
            try{
                console.log("hola :v")             
                Helpers.showAvatar(user.uid,(avatarpath) =>{
                    this.setState({
                        imagen: avatarpath
                    })
                })

                Helpers.getName(user.uid, (nombre) =>{
                    this.setState({
                        name : nombre
                    })
                })

                Helpers.getAge(user.uid,(edad)=>{
                    this.setState({
                        age: edad
                    })
                })

                Helpers.getEmail(user.uid,(correo)=>{
                    this.setState({
                        email: correo
                    })
                })

                 }catch(error){
        
                 }
    }

    render(){
        return(           

    <View>
        <View style={{height:150, alignItems:'center'}}>
    
            <View>
                <Image source={{uri: this.state.imagen}} style={styles.profileImage}/>
            </View>
    
        </View>
    
    <View style={{alignItems:'center'}}>
        <Text style={styles.userInfoText}>{this.state.name}</Text>
        <Text style={styles.userInfoText}>{this.state.email}</Text>
        <Text style={styles.userInfoText}>{this.state.age} años</Text>
    </View>
    </View>

        )
    }

}
class Drawernav extends Component{
    static navigationOptions = {
        header: null
      };

      constructor(props){
          super(props)

          this.state = {
              email: ''              
          }
          
      }

     

    render(){
        
        return(        

            <ProfileMenu/>

        );
    }
}



const customMenu = (props) =>(
    <SafeAreaView style={styles.safeStyle}>
    <Infouser/>
    <ScrollView>
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