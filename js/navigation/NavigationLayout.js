import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { sharedNavigationOptions } from './config';
import ReportScreen from '../screens/Report';
import SpeciesScreen from '../screens/IdentifySpecies';
import HomeScreen from '../screens/Home';
import { colors } from '../config/styles';

const ReportStack = createStackNavigator(
  {
    Home: HomeScreen,
    Report: ReportScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const SpeciesStack = createStackNavigator(
  {
    Species: SpeciesScreen,
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
    Species: SpeciesStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Report':
            iconName = `ios-calendar`;
            break;
          case 'Species':
            iconName = `ios-map`;
            break;
          default:
            iconName = `ios-bug`;
            break;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: colors.primary,
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
