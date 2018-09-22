import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height / 6,
  },

  image: {
    width: width / 3,
    height: width / 3,
    borderRadius: width / 6,
  },

  title: {
    fontSize: 28,
    paddingBottom: width / 14,
  },
  slogan: {
    fontSize: 12,
  },
});

export default styles;
