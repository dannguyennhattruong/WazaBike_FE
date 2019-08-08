import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export default class UserInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} 
                source={{ uri: 'https://img.icons8.com/color/96/000000/batman.png' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.info}>Phone: 123-456-789</Text>
                        <Text style={styles.info}>Email: John@gmail.com</Text>
                        <Text style={styles.info}>Score: 100</Text>
                    </View>
                </View>
            </View>
           
        );
    }


}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:18,
      color: "black",
      marginTop:15,
      textAlign: 'center'
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
  });