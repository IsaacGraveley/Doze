import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from './firebase';

// *** REFERENCE GLOBALNEWS.JS IF YOU NEED HELP UNDERSTANDING THE CODE, IT IS COMMENTED THERE, VERY SIMILAR PAGE *** 

export default class SportsNewsScreen extends Component {
  sportsDatabase= firebase.database().ref('sportsStory');
  state = {stories:{}, selectedId: '' }

  componentDidMount(){
    this.sportsDatabase.on('value', stories =>{
      const storiesJSON = stories.val();
      this.setState({ stories: storiesJSON === null ? {} : storiesJSON});
    })
    // this.sportsDatabase
    // .push({title: 'Three areas where Mitch Marner will give Maple Leafs a boost'});
    // this.sportsDatabase
    // .push({author: 'by Sportsnet Staff'});
    //  this.sportsDatabase
    // .push({date: 'Published Nov. 30th'});
    // this.sportsDatabase
    // .push({body: 'When we last saw Mitch Marner in game action, he was injured against the Philadelphia Flyers in what turned out to be the first of six losses in a row. Although the season is relatively young, Toronto hit a low in Marner’s absence, at one point falling out of a playoff spot with a points percentage below .500 and dismissing Mike Babcock as head coach.Marner’s last game was a little more than three weeks ago, but the team he’s returning to is, in some ways, an unrecognizable unit.The Leafs have played six Marner-less games under new coach Sheldon Keefe and won four of them. Part of this recovery is due to the sheer fact that, by the numbers, Toronto was due for one. But there’s also a sense that Keefe, handpicked by GM Kyle Dubas as his head coach at three different levels now, has a style that just fits better with the type of roster Dubas has assembled. It may take time for that to flesh out fully, but the early returns are certainly positive.'});

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
        //create a scroll view container for the page with the bg styles.
       
        <LinearGradient colors={['#240090', '#0C0032']}style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={require('./assets/logo.png')} style={styles.logo}/>
              <Text style={styles.headerTxt}>
                Sports News
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