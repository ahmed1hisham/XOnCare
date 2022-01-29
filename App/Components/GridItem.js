import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';

const {width, height} = Dimensions.get('window');
const GridItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.bordersStyle]}
      activeOpacity={1}>
      {props.content ? (
        <Text style={styles.textStyle}>
          {props.content === 'X' ? 'X' : 'O'}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    height: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: width * 0.27,
    lineHeight: width * 0.3,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default GridItem;
