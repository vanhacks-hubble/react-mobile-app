import React from 'react';
import { View } from 'react-native';
import TakePicture from '../../components/TakePicture';

const Report = ({ handleImage }) => {
  return (
    <View>
      <TakePicture handleImage={handleImage} />
    </View>
  );
};

export default Report;
