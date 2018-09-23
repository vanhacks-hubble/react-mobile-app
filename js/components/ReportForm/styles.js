import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

const styles = StyleSheet.create({
  root: {
    // flexGrow: 1,
    backgroundColor: "white",
    

    // justifyContent: 'flex-end',
  },
  inputTitle:{
    color: colors.secondary,
    marginHorizontal: 20,
  },
  businessName:{
      backgroundColor: "blue"
  },
  location:{
      backgroundColor: "orange"
  },

  comment:{
      backgroundColor: "purple"
  }
  
 
});

export default styles;
