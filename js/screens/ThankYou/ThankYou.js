import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const ThankYou = ({ slogan, image }) => {
  return (
    <View style={styles.root}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}> Thank You! </Text>
      <Text style={slogan}>{slogan}</Text>
    </View>
  );
};

export default ThankYou;
