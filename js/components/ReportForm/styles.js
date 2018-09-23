import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    // flexGrow: 1,
    backgroundColor: "white",
    height: height*0.6,
    marginTop: height*0.4
    
    

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
