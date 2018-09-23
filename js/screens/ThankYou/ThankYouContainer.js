import React, { Component } from 'react';
import ThankYou from './ThankYou';
class ThankYouContainer extends Component {
  static navigationOptions = {
    title: 'Ocean Wise',
  };
  render() {
    return (
      <ThankYou slogan={'Ensuring Healthy Oceans for Generations to Come'} />
    );
  }
}

export default ThankYouContainer;
