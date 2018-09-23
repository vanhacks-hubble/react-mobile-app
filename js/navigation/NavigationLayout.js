import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { sharedNavigationOptions } from './config';
import ReportScreen from '../screens/Report';
import HomeScreen from '../screens/Home';
import ThankYouScreen from '../screens/ThankYou/';
import { colors } from '../config/styles';

const ReportStack = createStackNavigator(
  {
    ThankYou: ThankYouScreen,
    Home: HomeScreen,
    Report: ReportScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

export default createBottomTabNavigator(
  {
    Report: ReportStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Report':
            iconName = `ios-filing`;
            break;
          default:
            iconName = `ios-filing`;
            break;
        }
        //return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'rgba(255,255,255,0.25)',
      labelStyle: {
        fontSize: 16,
        opacity: 0,
      },
      style: {
        backgroundColor: colors.primary,
        height: 0,
        shadowColor: 'black',
        shadowOffset: {
          height: -2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
    },
  },
);
