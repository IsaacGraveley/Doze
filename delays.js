import React, {Component} from 'react';
import { Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from './firebase';

export default class DelaysScreen extends Component {

  //make a variable named delayDatabase, and assign it to our firebase databa with the path of delay
  delayDatabase= firebase.database().ref('delay');
  //define our data as delays starting with no value inside of it
  state = {delays:{}, selectedId: '' }

  //whenever the component is loaded, convert the value of the database to JSON and set it as the states value
  componentDidMount(){
    this.delayDatabase.on('value', delays =>{
      const delaysJSON = delays.val();
      this.setState({ delays: delaysJSON === null ? {} : delaysJSON});
    })
    //If you uncomment the code below you can push this information to the database

   // this.delayDatabase
    // .push({type: 'Subway Delay'});
    // this.delayDatabase
    // .push({description: 'Line 2 is experiencing delays near Runnymede Station'});
    //  this.delayDatabase
    // .push({time: '11:20 AM'});

  }
    render() {
      return (
        
       //Create a linear gradient with specified hex values, and give it the container style.
        <LinearGradient colors={['#240090', '#0C0032']}style={styles.container}>
        {/* make the content scrollable */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <Image source={require('./assets/logo.png')} style={styles.logo}/>
              <Text style={styles.headerTxt}>
                Delays on TTC today
              </Text>
              {/* grab the data from the state and map through it, then output it in JSON value to the Text tag */}
              {
         Object.keys(this.state.delays).map( (type, index) =>
         <Text style={styles.newsBlock}>{`${JSON.stringify(this.state.delays[type])}`}</Text>       
       )
     }
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

    homeText: {
      marginTop: 20,
      color: 'white',
      fontSize: 30,
      textAlign: "center"
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
   logo: {
    marginTop: 0,
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
  newsBlock: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Futura',
    // textAlign: 'center',
  },
  
  scrollContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    
  }
  });