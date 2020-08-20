import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const InsSubmit = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default InsSubmit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006EE0',
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    margin: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  label: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#fff',
    fontWeight: '800',
  },
});
