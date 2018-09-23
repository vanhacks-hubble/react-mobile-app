import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { colors } from '../../config/styles';

import styles from './styles';

const ThankYou = ({ slogan, image, navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}> Thank You! </Text>
        <Text style={styles.slogan}>{slogan}</Text>
        <Button
          title={'Back To Home'}
          buttonStyle={styles.button}
          backgroundColor={colors.primary}
          onPress={() => navigation.popToTop()}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default withNavigation(ThankYou);
