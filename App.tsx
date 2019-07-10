import React from 'react';
import {StyleSheet, View} from 'react-native';
import Board from './components/Board';
import {SquareValueType} from './types';

export default function App() {
  const squares: Array<SquareValueType> = [
    null, 'X', 'O',
    'O', 'X', null,
    null, 'X', 'O',
  ];
  return (
    <View style={styles.container}>
      <Board squares={squares} onPress={(i: number) => console.log('square' + i)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
