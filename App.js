
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import the tabs class from the tabs.js file, and the LoginScreen class from the login screen file.
import Tabs from './tabs';
import LoginScreen from './login-screen';
import TechNewsScreen from './techNews';
import GlobalNewsScreen from './globalNews';
import SportsNewsScreen from './sportsNews';
import PoliticsNewsScreen from './politicsNews';

//create a stack navigator with the variable stackNavigator, give it names based off all of the components we imported
const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  Tabs: Tabs,
  Tech: TechNewsScreen,
  Sports: SportsNewsScreen,
  Global: GlobalNewsScreen,
  Politics: PoliticsNewsScreen
},
  {

})

//Create an app container around the stacknavigator
export default createAppContainer(stackNavigator)
