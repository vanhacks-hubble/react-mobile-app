import React, { Component, Fragment } from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';
import RootStack from './navigation/RootStackNavigation';
import { colors } from './config/styles';

export default class App extends Component {
  componentDidMount() {
    // console.log('android');
    // PermissionsAndroid.request('android.permission.ACCESS_FINE_LOCATION', {
    //   title: 'Location',
    //   message: 'We use your location for better accuracy',
    // });
  }
  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <RootStack />
      </Fragment>
    );
  }
}
