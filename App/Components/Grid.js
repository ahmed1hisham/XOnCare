import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import GridItem from './GridItem';

const {width, height} = Dimensions.get('window');

const Grid = props => {
  return (
    <View style={styles.container}>
      {/* 1st row cells */}
      <GridItem
        bordersStyle={styles.commonBorders}
        onPress={() => {
          props.onCellPress(0);
        }}
        content={props.currentGridValues[0]}
      />
      <GridItem
        bordersStyle={styles.commonBorders}
        onPress={() => {
          props.onCellPress(1);
        }}
        content={props.currentGridValues[1]}
      />
      <GridItem
        bordersStyle={[styles.commonBorders, {borderRightWidth: 0}]}
        onPress={() => {
          props.onCellPress(2);
        }}
        content={props.currentGridValues[2]}
      />

      {/* 2nd row cells */}
      <GridItem
        bordersStyle={styles.commonBorders}
        onPress={() => {
          props.onCellPress(3);
        }}
        content={props.currentGridValues[3]}
      />
      <GridItem
        bordersStyle={styles.commonBorders}
        onPress={() => {
          props.onCellPress(4);
        }}
        content={props.currentGridValues[4]}
      />
      <GridItem
        bordersStyle={[styles.commonBorders, {borderRightWidth: 0}]}
        onPress={() => {
          props.onCellPress(5);
        }}
        content={props.currentGridValues[5]}
      />

      {/* 3rd row cells */}
      <GridItem
        bordersStyle={[styles.commonBorders, {borderBottomWidth: 0}]}
        onPress={() => {
          props.onCellPress(6);
        }}
        content={props.currentGridValues[6]}
      />
      <GridItem
        bordersStyle={[styles.commonBorders, {borderBottomWidth: 0}]}
        onPress={() => {
          props.onCellPress(7);
        }}
        content={props.currentGridValues[7]}
      />
      <GridItem
        onPress={() => {
          props.onCellPress(8);
        }}
        content={props.currentGridValues[8]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  commonBorders: {
    borderBottomWidth: 5,
    borderRightWidth: 5,
  },
});

export default Grid;
