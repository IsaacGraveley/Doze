import React, {Component} from 'react';
import { Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from './firebase';

export default class GlobalNewsScreen extends Component {
  //make a variable named globalDatabase, and assign it to our firebase databa with the path of delay
  globalDatabase= firebase.database().ref('globalStory');
  state = {stories:{}, selectedId: '' }

  //whenever the component is loaded, convert the value of the database to JSON and set it as the states value
  componentDidMount(){
    this.globalDatabase.on('value', stories =>{
      const storiesJSON = stories.val();
      this.setState({ stories: storiesJSON === null ? {} : storiesJSON});
    })
    //If you uncomment the code below you can push this information to the database

    // this.globalDatabase
    // .push({title: 'Climate change is causing birds to shrink, study says'});
    // this.globalDatabase
    // .push({author: 'by Kelsey Vlamis, BBC News'});
    //  this.globalDatabase
    // .push({date: 'Published Nov. 30th'});
    // this.globalDatabase
    // .push({body: 'As the climate warms, birds are shrinking and their wingspans are growing, according to a new study.Researchers analysed 70,716 specimens from 52 North American migratory bird species collected over 40 years. The birds had died after colliding with buildings in Chicago, Illinois. The authors say the study is the largest of its kind and that the findings are important to understanding how animals will adapt to climate change.We found almost all of the species were getting smaller, said lead author Brian Weeks, an assistant professor at the school for environment and sustainability at the University of Michigan.The species were pretty diverse, but responding in a similar way, he said. The consistency was shocking.He said studies of animal responses to climate change often focus on shifts in geographical range or timing of life events, like migration and birth. But this study suggests body morphology is a crucial third aspect.'});

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
         //Create a linear gradient with specified hex values, and give it the container style.
        <LinearGradient colors={['#240090', '#0C0032']}style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={require('./assets/logo.png')} style={styles.logo}/>
              <Text style={styles.headerTxt}>
                World News
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