import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CurrentPlayerBanner = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>it's {props.currentPlayer}'s turn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  textStyle: {
    fontSize: 32,
    color: 'black',
    fontWeight: '600',
  },
});

export default CurrentPlayerBanner;
