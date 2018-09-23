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
      businessName: null,
      location: null,
      comment: null,
    };
  }

  _handleInputText(field, text){
    if(field === "BusinessName"){
      this.setState({businessName})
    } else if(field === "Comment"){ 
      this.setState({comment})
    }
  }

  _resetForm = () => {
    this.setState({
      imageurl: null,
      businessName: null,
      location: null,
      comment: null,
    });
  };

  _handleImage = base64 => {
    const imageurl = `data:image/*;base64, ${base64}`;
    this.setState({ imageurl });
  };

  render() {
    return (
      <Report
        resetForm={this._resetForm}
        handleImage={str => this._handleImage(str)}
        chosenImage={this.state.imageurl}
        handleInputText={(field, text) => this._handleInputText(field, text)}
      />
    );
  }
}
