import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: colors.secondary,
  },
  card: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  title: {
    color: colors.white,
  },
  text: {
    color: colors.white,
  },
});

export default styles;
