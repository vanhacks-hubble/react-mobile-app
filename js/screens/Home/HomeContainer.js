import React, { Component } from 'react';

import Home from './Home';

class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Ocean Wise',
  };
  render() {
    const { navigation } = this.props;
    return <Home navigation={navigation} />;
  }
}

export default HomeContainer;
