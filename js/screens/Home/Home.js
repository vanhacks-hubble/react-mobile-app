import React from 'react';
import { View, Text, Image, PermissionsAndroid } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';
import { colors } from '../../config/styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri:
            'http://seafood.ocean.org/resources/assets/images/logos/newLogo--white@2x.png',
        }}
      />

      <Text style={styles.text}>See something thats not ocean wise?</Text>

      <Button
        title={'Report Now'}
        backgroundColor={colors.primary}
        onPress={() => {
          navigation.navigate('Report');
        }}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

export default Home;
