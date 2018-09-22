import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={require('../../assets/dummyImage.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Text from database to go here based on config settings
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Report Now'}
          onPress={() => navigation.navigate('Report')}
        />
      </View>
    </View>
  );
};

export default Home;
