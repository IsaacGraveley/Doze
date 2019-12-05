import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Picker , Modal, TouchableHighlight, TouchableOpacity} from 'react-native';


export default class StopPicker extends React.Component {

  //we do this method so that we can access the props by using this.props in code further down
  constructor(props) {
    super(props);

    //start the state off with a simple default value, and with no picker displayed
    this.state = {
      pickerSelection: 'Default value',
      pickerDisplayed: false
    }
  }

  //we'll use this later on, when a picker item is clicked on, set the state to whatever value was clicked
  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    })
    
    this.togglePicker();
  }

  //whenever the picker is clicked late on, change the picker display
  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }
    render()
     {
       //make an array called picker values, assign each a title and value that will appear in our picker
      const pickerValues = [
        {
          title: 'Kipling',
          value: 'kipling'
        },
        {
          title: 'Islington',
          value: 'islington'
        },
        {
          title: 'Old Mill',
          value: 'old mill'
        },
        {
          title: 'Jane',
          value: 'jane'
        },
        {
          title: 'Runnymede',
          value: 'runnymede'
        },
        {
          title: 'High Park',
          value: 'high park'
        },
        {
          title: 'Keele',
          value: 'keele'
        },
        {
          title: 'Dundas West',
          value: 'dundas west'
        },
        {
          title: 'Lansdowne',
          value: 'lansdowne'
        },
        {
          title: 'Dufferin',
          value: 'dufferin'
        },
        {
          title: 'Ossignton',
          value: 'ossignton'
        },
        {
          title: 'Christie',
          value: 'christie'
        },
        {
          title: 'Bathurst',
          value: 'bathurst'
        },
      ]
        return (
            <View>

              <Button style={styles.homeBtn} onPress={() => this.togglePicker()} title={ "Choose a starting point" } />
              <Text style={styles.btnText}>{this.newValue}</Text>

              {/* Create a modal thats visible based off whether or not our togglepicker function was called or not, gie it a slide animtion */}
              <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>

              <ScrollView contentContainerStyle={styles.pickerContainer}>
              
                  <Text>Please pick a value</Text>
                  {/* map through the values of our array */}
                  { pickerValues.map((value, index) => {
                    //make every value clickable and display the title of each value.
                    return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={styles.pickerValueContainer}>
                        <Text style={styles.buttonTxt}>{ value.title }</Text>
                      </TouchableHighlight>
                  })}

            {/* this creates our cancel button at the bottom of the picker */}
            <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#474747' }}>Cancel</Text>
            </TouchableHighlight>
            
          </ScrollView>
        </Modal>
        </View>
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

    pickerContainer: {
      margin: 20, 
      padding: 20,
      backgroundColor: '#efefef',
      bottom: 20,
      left: 20,
      right: 20,
      alignItems: 'center',
      position: 'absolute' 
    },

    pickerValueContainer: {
      paddingTop: 4,
       paddingBottom: 4
    },

    homeBtn: {
      marginTop: 40,
      alignItems: 'center',
      borderRadius: 90,
      width: 300,
      height: 50,    
    },

    buttonTxt: {
      color: '#3500D3',
    }
    

  });