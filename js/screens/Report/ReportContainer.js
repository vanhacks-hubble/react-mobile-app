import React, { Component } from 'react';
import Report from './Report';

export default class ReportContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageurl: '',
    };
  }

  _handleImage = base64 => {
    this.setState({ imageurl: base64 });
  };

  render() {
    return <Report handleImage={str => this._handleImage(str)} />;
  }
}
