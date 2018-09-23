import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const BackgroundImage = ({ children }) => {
  return (
    <Image
      source={require('../../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      {children}
    </Image>
  );
};

export default BackgroundImage;
