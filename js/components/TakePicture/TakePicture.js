import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import ImagePicker from 'react-native-image-picker';

class TakePicture extends Component {
  

  


  _pickImageHandler = () => {
    ImagePicker.showImagePicker(
      { title: 'Pick an Image', maxWidth: 800, maxHeight: 600 },
      res => {
        if (res.didCancel) {
          console.log('User cancelled!');
        } else if (res.error) {
          console.log('Error', res.error);
        } else {
          this.props.handleImage(res.data)
        }
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Pick Image From Camera and Gallery{' '}
        </Text>
        <View style={styles.placeholder}>
          <Image source={this.props.chosenImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={this._pickImageHandler} />

          <Button title="Reset" onPress={() => this.props.resetImage} />
        </View>
      </View>
    );
  }
}

export default TakePicture;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '70%',
    height: 280,
    marginTop: 50,
  },
  button: {
    width: '80%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});
