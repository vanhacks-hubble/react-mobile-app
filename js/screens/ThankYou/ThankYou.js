import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { colors } from '../../config/styles';

import styles from './styles';

const ThankYou = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/Icon.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}> Thank you for letting us know. </Text>
          <Text style={styles.slogan}>
            The information provided will be stored in our records
          </Text>
          <Button
            title={'Back To Ocean Wise'}
            buttonStyle={styles.button}
            backgroundColor={colors.white}
            onPress={() => navigation.popToTop()}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default withNavigation(ThankYou);
