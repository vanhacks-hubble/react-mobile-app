import React, { Component } from 'react';
import Report from './Report';

export default class ReportContainer extends Component {
  static navigationOptions = {
    title: 'Ocean Wise',
  };
  constructor(props) {
    super(props);

    this.state = {
      imageurl: null,
      location: null,
      name: null,
      comment: null,
    };
  }

  _resetImage = () => {
    this.setState({
      imageurl: null,
    });
  };

  _handleImage = base64 => {
    const imageurl = `data:image/*;base64, ${base64}`;
    this.setState({ imageurl });
  };

  render() {
    return (
      <Report
        resetImage={this._resetImage}
        handleImage={str => this._handleImage(str)}
        chosenImage={this.state.imageurl}
      />
    );
  }
}
