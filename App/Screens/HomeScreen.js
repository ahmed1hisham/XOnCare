import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Alert, StatusBar} from 'react-native';
import CurrentPlayerBanner from '../Components/CurrentPlayerBanner';
import Grid from '../Components/Grid';
import ResetButton from '../Components/ResetButton';
import {winningIndicies} from '../constants';

const HomeScreen = props => {
  const emptyGrid = [null, null, null, null, null, null, null, null, null];
  const playerOne = 'X';
  const playerTwo = 'O';

  const [gridValues, setGridValues] = useState(emptyGrid);
  const [currentPlayer, setCurrentPlayer] = useState(playerOne);
  const [noOfTurnsPlayed, setNoOfTurnsPlayed] = useState(0);

  // Side effect which runs after each turn to trigger winner handling
  useEffect(() => {
    handleWinner(gridValues);
  }, [currentPlayer]);

  // Logic to decide which symbol to write in a cell (X or O) when the cell is pressed
  const onGridItemPress = index => {
    if (currentPlayer === playerOne && !gridValues[index]) {
      let gridClone = gridValues;
      gridClone[index] = playerOne;
      setGridValues(gridClone);
      setCurrentPlayer(playerTwo);
      setNoOfTurnsPlayed(old => old + 1);
    } else if (currentPlayer === playerTwo && !gridValues[index]) {
      let gridClone = gridValues;
      gridClone[index] = playerTwo;
      setGridValues(gridClone);
      setCurrentPlayer(playerOne);
      setNoOfTurnsPlayed(old => old + 1);
    }
  };

  // Function to restart game with an empty grid
  const resetGrid = () => {
    setNoOfTurnsPlayed(0);
    setCurrentPlayer(playerOne);
    setGridValues(emptyGrid);
  };

  // Logic to handle winning states and draws
  const handleWinner = grid => {
    let winner = null;

    if (noOfTurnsPlayed === 0) return; // to skip check if grid is being reset

    // Logic for finding three consecutive symbols in the grid (vertical, horizontal or diagonal)
    for (let i = 0; i < winningIndicies.length; i++) {
      const list = winningIndicies[i];

      if (
        grid[list[0]] === grid[list[1]] &&
        grid[list[1]] === grid[list[2]] &&
        grid[list[2]] !== null
      ) {
        Alert.alert('Player ' + grid[list[0]] + ' won', 'Congratulations!', [
          {
            text: 'OK',
            onPress: () => {
              resetGrid();
            },
          },
        ]);
        winner = grid[list[0]];
        break;
      }
    }
    if (noOfTurnsPlayed === 9 && !winner) {
      Alert.alert("It's a draw!", 'Try playing again', [
        {
          text: 'OK',
          onPress: () => {
            resetGrid();
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <CurrentPlayerBanner currentPlayer={currentPlayer} />
      <Grid onCellPress={onGridItemPress} currentGridValues={gridValues} />
      <ResetButton onPress={resetGrid} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default HomeScreen;
