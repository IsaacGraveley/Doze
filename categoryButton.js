import React from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';

//get the screen width and make it a variable
const screenWidth = Math.round(Dimensions.get('window').width);
//create an array for the paths of the images, and a name associated to them to call in later.
const newsImages = {
    sports: require('./assets/images/sports.jpg'),
    politics: require('./assets/images/politics.jpg'),
    technology: require('./assets/images/technology.jpg'),
    global: require('./assets/images/global.jpg')
  };


//create the Newsbutton component
export default class NewsButton extends React.Component {
  //create an animation name with a start value of 0
  fadeRestIn = new Animated.Value(0);
//whenever this component is loading, complete the animation with values down below, (1 second from 0 to 1 opacity)
componentDidMount(){
  Animated.timing(this.fadeRestIn, {
    duration: 1000,
    toValue: 1
  }).start()
}

  render() {
  return (
    <View style={styles.buttonContainer}>

      {/* create an animated image tag to store our image, give it a prop of newsImage so we can specify it later when it's called in */}
      <Animated.Image
          style={{...styles.buttonStyle, opacity:this.fadeRestIn}}
          source={newsImages[this.props.newsImage]}
        />
        
    </View>
  );
}
}

//create styles for the component
const styles = StyleSheet.create({
  buttonContainer: {   
    flexDirection: 'row',
    marginTop: '-10%',
    flex: 1,
    width: screenWidth,
    height: '20%',
    alignItems: 'center',
  },

  buttonStyle: {
    width: screenWidth,
    height: 300,
    resizeMode: 'contain',
  }
});