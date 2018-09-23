import React from 'react';
import { View } from 'react-native';
import TakePicture from '../../components/TakePicture';

const Report = ({
  handleImage,
  resetForm,
  chosenImage,
  handleInputText,
  submitReport,
}) => {
  return (
    <TakePicture
      handleImage={handleImage}
      resetForm={resetForm}
      chosenImage={chosenImage}
      handleInputText={handleInputText}
      submitReport={submitReport}
    />
  );
};

export default Report;
