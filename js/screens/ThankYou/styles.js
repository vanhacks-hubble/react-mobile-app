import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { colors } from '../../config/styles';

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
  },
  title: {
    marginTop: 16,
    fontSize: 32,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  button: {
    marginTop: 20,
  },
  slogan: {
    fontSize: 16,
    marginTop: 4,
    maxWidth: width * 0.8,
    padding: 8,
    textAlign: 'center',
  },
});

export default styles;
