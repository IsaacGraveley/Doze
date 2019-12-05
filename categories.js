import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Picker , Modal, TouchableHighlight, TouchableOpacity, navigation} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NewsButton from './categoryButton';




export default class CatergoriesScreen extends React.Component {

 
    render()
     {
        return (
            //Create a linear gradient with specified hex values, and give it the container style.
            <LinearGradient colors={['#240090', '#0C0032']}style={styles.container}>
                
            {/* make the content scrollable with a scroll view */}
            <ScrollView>

                    {/* Create a touachable highlight, inside of it, put the newsbutton component with corresponding image prop
                    make the whole touchable highlight clickable with the onpress function, which will direct you to the appropriate page
                    repeat down below for other categories of news */}
                    <TouchableHighlight style={styles.buttonStyle} onPress={
                    ()=>this.props.navigation.navigate('Politics') }>
                    <NewsButton newsImage = "politics" newsName = "politics"></NewsButton>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonStyle} onPress={
                        ()=>this.props.navigation.navigate('Sports') }>
                        <NewsButton newsImage = "sports"></NewsButton>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonStyle} onPress={
                        ()=>this.props.navigation.navigate('Tech') }>
                        <NewsButton newsImage = "technology"></NewsButton>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonStyle} onPress={
                        ()=>this.props.navigation.navigate('Global') }>
                        <NewsButton newsImage = "global"></NewsButton>
                    </TouchableHighlight>

                </ScrollView>
            </LinearGradient>
        );
      }
    }
  

  //create styles for this screen.
  const styles = StyleSheet.create({
    container: {
        flex: 1,
         alignItems: 'center',
          justifyContent: 'center'
    },
    buttonStyle: {
      marginTop: '-10%',  
    },

    bg: {
      backgroundColor: '#23395B'
    },
  });