import React, { Component } from 'react';

import ReportResults from './ReportResults';

class ReportResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
    };
  }

  static navigationOptions = {
    title: 'User Reports',
  };
  componentDidMount() {
    fetch('https://vanhacks-hubble.herokuapp.com/events')
      .then(res => res.json())
      .then(res => this.setState({ reports: res }));
  }
  render() {
    return <ReportResults reports={this.state.reports} />;
  }
}

export default ReportResultsContainer;
