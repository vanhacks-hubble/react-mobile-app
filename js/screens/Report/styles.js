import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
  },
  placeholder: {
    flex: 1,
  },
  button: {
    paddingBottom: 20,
  },
  previewImage: {
    width,
    height,
  },
});

export default styles;
