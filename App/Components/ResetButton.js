import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const ResetButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.textStyle}>RESET GRID</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
  },
});

export default ResetButton;
