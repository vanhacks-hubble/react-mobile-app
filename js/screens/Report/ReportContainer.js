import React, { Component } from 'react';
import Report from './Report';

export default class ReportContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageurl: '',
    };
  }

  _resetImage =() => {
    this.setState({
      imageurl: ''
    })
  }

  _handleImage = base64 => {
    this.setState({ imageurl: base64 });
  };

  render() 
  {

    return <Report resetImage={this._resetImage} handleImage={str => this._handleImage(str)} chosenImage={this.state.imageurl} />;
  }
}
