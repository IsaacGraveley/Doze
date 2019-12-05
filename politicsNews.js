import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from './firebase';

// *** REFERENCE GLOBALNEWS.JS IF YOU NEED HELP UNDERSTANDING THE CODE, IT IS COMMENTED THERE, VERY SIMILAR PAGE *** 

export default class PoliticsNewsScreen extends Component {
  politicsDatabase= firebase.database().ref('politicsStory');
  state = {stories:{}, selectedId: '' }

  componentDidMount(){
    this.politicsDatabase.on('value', stories =>{
      const storiesJSON = stories.val();
      this.setState({ stories: storiesJSON === null ? {} : storiesJSON});
    })
    // this.politicsDatabase
    // .push({title: 'No apology from PM Trudeau after U.S. President Trump calls him "two-faced"'});
    // this.politicsDatabase
    // .push({author: 'by Rachel Gillmore, CTV News'});
    //  this.politicsDatabase
    // .push({date: 'Published Nov. 30th'});
    // this.politicsDatabase
    // .push({body: 'OTTAWA -- Prime Minister Justin Trudeau did not apologize after U.S. President Donald Trump called him "two-faced" in the wake of a video of the PM apparently speaking candidly to other world leaders about the president."Last night, I made a reference to the fact that there was an unscheduled press conference before my meeting with President Trump and I was happy to take part of it, but it was certainly notable," PM Trudeau said on Wednesday.When reporters pressed Trudeau on the issue, he neither apologized nor confirmed whether he had yet spoken to Trump about the video and its fallout. Instead, Trudeau explained that the remarks caught on camera were simply informing other foreign leaders that Trump had announced the location of the next G7 meeting, Camp David, during an unscheduled press conference.'});

  }
  //Create
  create(payload) {
  }
  update(id, payload) {
  }
  delete(id){
  }
    render() {
      return (
        <LinearGradient colors={['#240090', '#0C0032']}style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image source={require('./assets/logo.png')} style={styles.logo}/>
                  <Text style={styles.headerTxt}>
                    Politics News
                  </Text>
                
                {
                    Object.keys(this.state.stories).map( (title, index) =>
                    <Text style={styles.newsBlock}>{`${JSON.stringify(this.state.stories[title])}`}</Text>       
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
    marginTop: 100,
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
    marginBottom: 100,
  }
  });