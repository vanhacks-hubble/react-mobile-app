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
      checked: false,
    };
  }

  _handleInputText(field, text) {
    if (field === 'BusinessName') {
      this.setState({ businessName: text });
    } else if (field === 'Comment') {
      this.setState({ comment: text });
    }
  }

  _resetForm = () => {
    this.setState({
      imageurl: null,
      businessName: null,
      location: null,
      comment: null,
      checked: false,
    });
  };

  _handleCheckBox = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  _handleImage = base64 => {
    const imageurl = base64;
    this._setLocationData();
    this.setState({ imageurl });
  };
  _setLocationData = () => {
    const onSuccess = data => {
      this.setState({ location: data });
    };
    navigator.geolocation.getCurrentPosition(onSuccess);
  };

  _submitReport = () => {
    let location;
    if (this.state.checked) {
      location = [0, 0];
    } else {
      location = [
        this.state.location.coords.latitude,
        this.state.location.coords.longitude,
      ];
    }
    const report = {
      image_data: this.state.imageurl,
      name: this.state.businessName,
      location,
      comment: this.state.comment,
    };
    fetch('https://vanhacks-hubble.herokuapp.com/events', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(report),
    })
      .then(response => {
        this._resetForm();
        this.props.navigation.navigate('ThankYou');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Report
        resetForm={this._resetForm}
        handleImage={str => this._handleImage(str)}
        chosenImage={this.state.imageurl}
        handleInputText={(field, text) => this._handleInputText(field, text)}
        submitReport={this._submitReport}
        formValues={{
          businessName: this.state.businessName,
          comment: this.state.comment,
        }}
        handleCheckBox={this._handleCheckBox}
        checked={this.state.checked}
      />
    );
  }
}
