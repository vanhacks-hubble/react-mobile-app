import React, { Component } from 'react';
import { Text, View, Image, Modal, Dimensions } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';
import ReportForm from '../../components/ReportForm';

import ImagePicker from 'react-native-image-picker';

class Report extends Component {
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

  componentDidMount() {
    this._pickImageHandler();
  }
  render() {
    const {
      resetForm,
      chosenImage,
      handleInputText,
      submitReport,
      formValues,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          {chosenImage && (
            <Image
              source={{ uri: `data:image/*;base64,${chosenImage}` }}
              style={styles.previewImage}
            />
          )}
        </View>
        <View style={styles.button}>
          {!chosenImage && (
            <Button title="Pick Image" onPress={this._pickImageHandler} />
          )}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={chosenImage !== null}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <ReportForm
                handleInputText={handleInputText}
                resetForm={resetForm}
                submitReport={submitReport}
                formValues={formValues}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Report;
