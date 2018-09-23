import React, { Component } from 'react';
import { Text, View, Image, Modal, Dimensions } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';
import ReportForm from '../../components/ReportForm';

import ImagePicker from 'react-native-image-picker';

class TakePicture extends Component {
  _pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: 'Pick an Image' }, res => {
      if (res.didCancel) {
        console.log('User cancelled!');
      } else if (res.error) {
        console.log('Error', res.error);
      } else {
        this.props.handleImage(res.data);
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          {this.props.chosenImage && (
            <Image
              source={{ uri: this.props.chosenImage }}
              style={styles.previewImage}
            />
          )}
        </View>
        <View style={styles.button}>
          {!this.props.chosenImage && (
            <Button title="Pick Image" onPress={this._pickImageHandler} />
          )}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.chosenImage !== null}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <ReportForm
                handleInputText={this.props.handleInputText}
                resetForm={this.props.resetForm}
                submitReport={this.props.submitReport}
              />
              {/* <Button title="Reset" onPress={() => this.props.resetImage()} /> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default TakePicture;
