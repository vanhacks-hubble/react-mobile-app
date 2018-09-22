import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'space-evenly',
  },
  image: {
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
    flex: 0.6,
    marginTop: 8,
  },
  text: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
