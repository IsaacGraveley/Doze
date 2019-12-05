import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Picker , Modal, TouchableHighlight, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StopPicker from './components/picker';
import SecondPicker from './components/secondPicker';




export default class PlanScreen extends React.Component {

 
    render()
    
     {
        return (
          
            <LinearGradient
        colors={['#240090', '#0C0032']}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >
             <Image source={require('./assets/logo.png')} style={styles.logo}/>
              <Text style={styles.headerTxt}>
                Plan A Trip
              </Text>

              <Text style={styles.infoTxt}>
              To get started, choose a starting point on a subway line, and an endping point on the same subway line. Once you confirm, a timer will be set to wake you up 2 stops before yours.
              </Text>
              
              
              <StopPicker></StopPicker>
              
              <SecondPicker></SecondPicker>
              <TouchableOpacity style={styles.homeBtn} onPress={
            () =>
              alert('Your timer will go off in: 6 minutes & 53 Seconds')
             
        }>

          
                <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
            </LinearGradient>
        );
      }
    }
  

  //create styles for this screen.
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#23395B'
    },

    logo: {
      marginTop: -100,
      width: '40%',
      height: '40%',
      resizeMode: "contain",
  },

    homeText: {
      marginTop: 20,
      color: 'white',
      fontSize: 30,
      textAlign: "center"
    },

    headerTxt: {
      marginTop:-80,
      color: '#fff',
      fontSize: 26,
    },

    subheadTxt: {
      marginTop: 20,
      color: '#fff',
      fontSize: 20,
    },

    bg: {
      backgroundColor: '#23395B'
    },

   lookOut: {
    marginTop: 60,
      color: 'white',
      fontSize: 30,
      textAlign: "center"
   },
   infoTxt: {
    padding: 20,
  marginTop: 20,
  color: '#fff',
  fontSize: 18,
  textAlign: 'center',
  paddingBottom: 10,
},

linePicker: {
  backgroundColor:'#fafafa',
  color: '#fff',
  width:300,
  height: 300,
},

btnText: {
  justifyContent: 'center',
  marginTop: 5,
  color: '#fff',
  fontSize: 30
}, 
homeBtn: {
  marginTop: 40,
  alignItems: 'center',
  borderRadius: 90,
  backgroundColor: '#3500D3',
  width: 300,
  height: 50,
},
  });