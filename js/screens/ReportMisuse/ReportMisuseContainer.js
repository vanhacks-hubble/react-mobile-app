import React, { Component } from 'react';

import ReportMisuse from './ReportMisuse';

class ReportMisuseContainer extends Component {
  static navigationOptions = {
    title: 'Report',
  };
  render() {
    return <ReportMisuse />;
  }
}

export default ReportMisuseContainer;
