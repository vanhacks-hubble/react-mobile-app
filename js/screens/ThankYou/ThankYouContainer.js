import React, { Component } from 'react';
import ThankYou from './ThankYou';
const image = require('../../assets/dummyImage.png')
class ThankYouContainer extends Component {
  static navigationOptions = {
    title: 'Ocean Wise',
  };
  render() {
    return (
      <ThankYou slogan="Ensuring Healthy Oceans for Generations to Come" image={image} />
    );
  }
}

export default ThankYouContainer;
