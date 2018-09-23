import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const ThankYou = ({ slogan, image }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}> Thank You! </Text>
        <Text style={styles.slogan}>{slogan}</Text>
      </View>
    </View>
  );
};

export default ThankYou;
