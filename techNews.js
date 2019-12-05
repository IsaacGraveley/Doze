import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from './firebase';

// *** REFERENCE GLOBALNEWS.JS IF YOU NEED HELP UNDERSTANDING THE CODE, IT IS COMMENTED THERE, VERY SIMILAR PAGE *** 

export default class TechNewsScreen extends Component {
  techDatabase= firebase.database().ref('techSstory');
  state = {stories:{}, selectedId: '' }

  componentDidMount(){
    this.techDatabase.on('value', stories =>{
      const storiesJSON = stories.val();
      this.setState({ stories: storiesJSON === null ? {} : storiesJSON});
    })
    // this.techDatabase
    // .push({title: 'Why the Cybertruck is a breakthrough for Tesla and designer Franz von Holzhausen'});
    // this.techDatabase
    // .push({author: 'by Matthew DeBord'});
    //  this.techDatabase
    // .push({date: 'Published Nov. 30th'});
    // this.techDatabase
    // .push({body: 'Franz von Holzhausens calling card was that at Tesla he hadnt created wild, futuristic vehicles that evoked spaceships or impossible constructions of curves and contorted lines. The Model S in particular was a subdued masterpiece thats held up fantastically well since its introduction in 2012. It was a perfectly normal-looking all-electric sedan that nonetheless made you want to keep looking at at. It should have been boring, but it wasnt. It was captivating. Very few car designers have achieved this: Alec Issigonis with the original Mini, Malcolm Sayer and the Jaguar E-Type, Henrik Fisker and the Aston Martin DB9. When Tesla rolled out its new Roadster a few years ago, you could see von Holzhausen" extending himself but not going crazy. Likewise the Model Y crossover, which very clearly represented von Holzhausen sticking to the core visual vocabulary that he had made into his own language.'});

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
                          Tech News
                        </Text>
                        {/* grab the data from the state and map through it, then output it in JSON value to the Text tag */}

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