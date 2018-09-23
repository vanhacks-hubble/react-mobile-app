import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-elements';
import styles from './styles';
const ReportForm = ({ handleInputText, resetForm, submitReport }) => {
  return (
    <View style={styles.root}>
      <View style={styles.textInputContainer}>
        <View>
          <Text style={styles.inputTitle}>
            What is the Validated Business Name?
          </Text>
          <TextInput
            style={styles.businessName}
            placeholder="Business Name"
            onChangeText={text => {
              handleInputText('BusinessName', text);
            }}
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Please Describe the Misuse</Text>
          <TextInput
            style={styles.comment}
            placeholder="Comments"
            multiline={true}
            numberOfLines={6}
            onChangeText={text => {
              handleInputText('Comment', text);
            }}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={() => resetForm()} style={styles.button}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => submitReport()} style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportForm;
