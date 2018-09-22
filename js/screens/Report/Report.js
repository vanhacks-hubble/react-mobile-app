import React from 'react';
import { View } from 'react-native';
import TakePicture from '../../components/TakePicture';

const Report = ({ handleImage, resetImage, chosenImage}) => {
  return (
    <View>
      <TakePicture handleImage={handleImage} resetImage={resetImage} chosenImage={chosenImage}/>
    </View>
  );
};

export default Report;
