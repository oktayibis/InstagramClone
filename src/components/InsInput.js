import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const InsInput = (props) => {
  return (
    <TextInput
      placeholderTextColor="#838383"
      placeholder={props.title}
      {...props}
      style={styles.container}
    />
  );
};

export default InsInput;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    width: '90%',
    backgroundColor: '#f9f9f9',
    alignSelf: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 4,
  },
});
