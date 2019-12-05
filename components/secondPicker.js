import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Picker , Modal, TouchableHighlight} from 'react-native';

// *** REFERENCE COMPONENTS/PICKER.JS IF YOU NEED HELP UNDERSTANDING THE CODE, IT IS COMMENTED THERE, VERY SIMILAR PAGE *** 

export default class SecondPicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Default value!',
      pickerDisplayed: false
    }
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    })

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }
    render()
     {
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

              <Button onPress={() => this.togglePicker()} title={ "Choose an ending point" } />

        <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
          <ScrollView contentContainerStyle={{ margin: 20, padding: 20,
            backgroundColor: '#efefef',
            bottom: 20,
            left: 20,
            right: 20,
            alignItems: 'center',
            position: 'absolute' }}>
              
            <Text>Please pick a value</Text>
            { pickerValues.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text style={styles.buttonTxt}>{ value.title }</Text>
                </TouchableHighlight>
            })}

            
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