import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { colors } from '../../config/styles';

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
  },
  title: {
    marginTop: 16,
    fontSize: 28,
    textAlign: 'center',
    color: colors.white,
  },
  buttonText: {
    fontSize: 20,
    color: colors.primary,
    paddingHorizontal: 12,
  },
  button: {
    marginTop: 20,
    shadowColor: colors.black,
    shadowOffset: {
      height: 5,
      width: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.6,
  },
  slogan: {
    fontSize: 12,
    marginTop: 4,
    maxWidth: width * 0.8,
    textAlign: 'center',
    color: colors.white,
  },
});

export default styles;
