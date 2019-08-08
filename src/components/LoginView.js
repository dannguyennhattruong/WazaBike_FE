import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,TextInput, TouchableHighlight,Alert
} from 'react-native';





export default class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {
            'email': '',
            'phone': '',
        }
    }


    onClickListener = (viewId) =>{
        Alert.alert("Alert", "Button pressed " + viewId);
    
    }


    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image style={styles.logo} 
                    source={{uri:'https://img.icons8.com/officel/80/000000/sheep-on-bike.png'}}/>
                    <Text style={styles.title}>WAZABIKE</Text>
                </View>

                <View style={styles.inputContainer}> 
                    <Image style={styles.inputIcon} 
                    source={{uri:'https://img.icons8.com/ultraviolet/40/000000/user.png'}}/> 
                    <TextInput style={styles.inputs} placeholder="Enter your email" 
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} 
                    source={{uri:'https://png.icons8.com/key-2/ultraviolet/50/3498db'}} />
                    <TextInput style={styles.inputs} placeholder="Enter your phone number" 
                    secureTextEntry={true} underlineColorAndroid='transparent'
                    onChangeText={(phone) => this.setState({phone})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                onPress={() => this.onClickListener}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} 
                onPress={() => this.onClickListener('restore_password')}>
                    <Text>Forgot your phone number</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer}
                onPress={() => this.onClickListener('register')}>
                    <Text>Register</Text>
                </TouchableHighlight>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    },
    logo:{
        height: 80,
        width: 80,
        alignItems: 'center',
    },
    title:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30
    }

  });