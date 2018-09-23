import React, { Component } from 'react';
import Report from './Report';
// import axios from 'axios';

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
    const report = {
      image_data: this.state.imageurl,
      name: this.state.businessName,
      location: [
        this.state.location.coords.latitude,
        this.state.location.coords.longitude,
      ],
      comment: this.state.comment,
    };
    console.log(report);
    const promise = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://vanhacks-hubble.herokuapp.com/events', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(report));
      resolve();
    });
    promise.then(
      res => {
        console.log(res);
        //this._resetForm();
      },
      rej => {
        console.log(rej);
      },
    );
  };

  render() {
    return (
      <Report
        resetForm={this._resetForm}
        handleImage={str => this._handleImage(str)}
        chosenImage={this.state.imageurl}
        handleInputText={(field, text) => this._handleInputText(field, text)}
        submitReport={this._submitReport}
      />
    );
  }
}
