import React from 'react';
import { View } from 'react-native';
import TakePicture from '../../components/TakePicture';

const Report = ({ handleImage, resetImage, chosenImage }) => {
  return (
    <TakePicture
      handleImage={handleImage}
      resetImage={resetImage}
      chosenImage={chosenImage}
    />
  );
};

export default Report;
