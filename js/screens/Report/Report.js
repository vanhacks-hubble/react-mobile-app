import React from 'react';
import { View } from 'react-native';
import TakePicture from '../../components/TakePicture';

const Report = ({ handleImage, resetForm, chosenImage, handleInputText}) => {
  return (
    <TakePicture
      handleImage={handleImage}
      resetForm={resetForm}
      chosenImage={chosenImage}
      handleInputText={handleInputText}
    />
  );
};

export default Report;
