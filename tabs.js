import { createBottomTabNavigator } from 'react-navigation-tabs';
import PlanScreen from './PlanTrip';
import DelayScreen from './delays';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import CatergoriesScreen from './categories';

//name our screen names and pages theyre being used with
export default createBottomTabNavigator({
    Plan: PlanScreen,
    Delays: DelayScreen,
    NewsCatergories: CatergoriesScreen
  },

  //this next section allows us to customize the nav bar with icons, tint colors etc with the use of Ionicons
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        // if page name is Plan then used the ios-checkmarck iconName, if its news use that iconName, if its delays use that
        if (routeName === 'Plan') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'News') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Delays') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        //definie the size name and colour
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      //customize the tab bars background colours and tint based off if the tab is active or not.
    }),
    tabBarOptions: {
      inactiveBackgroundColor: '#190061',
      activeBackgroundColor: '#240090',
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
    },
  }
  )

  