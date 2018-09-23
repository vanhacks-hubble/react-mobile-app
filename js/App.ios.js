import React, { Component, Fragment } from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';
import RootStack from './navigation/RootStackNavigation';
import { colors } from './config/styles';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <RootStack />
      </Fragment>
    );
  }
}
