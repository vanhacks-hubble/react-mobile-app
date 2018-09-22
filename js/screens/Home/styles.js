import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: height * 0.4,
    width,
  },
  textContainer: {
    flex: 0.8,
    justifyContent: 'center',
    padding: 8,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
