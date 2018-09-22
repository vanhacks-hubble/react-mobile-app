import React, { Component } from 'react';

import IdentifySpecies from './IdentifySpecies';

class IdentifySpeciesContainer extends Component {
  static navigationOptions = {
    title: 'Species',
  };
  render() {
    return <IdentifySpecies />;
  }
}

export default IdentifySpeciesContainer;
