import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: height * 0.535,
    marginTop: height * 0.44,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInputContainer: {
    padding: 24,
  },
  checkBoxText:{
    color: colors.primary,
    paddingVertical: 0,
    fontWeight: '600',
    marginRight: width*0.351

  },
  inputTitle: {
    color: colors.primary,
    paddingVertical: 12,
    fontWeight: '600',
  },
  businessName: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 12,
  },

  comment: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 12,
    height: 80,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // paddingVertical: 20,
  },
  button: {
    width: width / 2,
    marginHorizontal: 0,
    paddingHorizontal: 0,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderWidth:1,
    borderColor: colors.white

  },
  buttonText: {
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
