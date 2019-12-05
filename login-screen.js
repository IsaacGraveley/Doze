import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class LoginScreen extends Component {
    
    render() {
      return (
        //Create a linear gradient with specified hex values, and give it the container style.
        <LinearGradient colors={['#240090', '#0C0032']}style={styles.container}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>

          <Text style={styles.welcomeTxt}>Get from point A to point B stress free</Text>
          <Text style={styles.infoTxt}>Doze is A transit app that will wake you up when you’re almost at your stop, keep you alert on any updates regarding TTC and delays, and give them a news feed to keep up with different news updates. </Text>
          
          {/* create a button, that when is pressed will switch to the tab navigator created in the app.js file */}
            <TouchableOpacity style={styles.homeBtn} onPress={
                () =>
                this.props.navigation.navigate('Tabs')
            }>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
       </LinearGradient>
      );
    }
  }

  //create styles for this page
  const styles = StyleSheet.create({
    container: {
      flex: 1,
       alignItems: 'center',
        justifyContent: 'center'
  },

    welcomeTxt: {
        marginTop: -200,
      color: '#fff',
      fontSize: 24,
    },

    logo: {
        marginTop: -200,
        width: '80%',
        height: '80%',
        resizeMode: "contain",
    },

    infoTxt: {
        padding: 20,
      marginTop: 20,
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      paddingBottom: 10,
    },


    homeBtn: {
        marginTop: 40,
        alignItems: 'center',
        borderRadius: 90,
        backgroundColor: '#3500D3',
        width: 300,
        height: 50,
    },

    btnText: {
        justifyContent: 'center',
        marginTop: 5,
        color: '#fff',
        fontSize: 30
    }
  });