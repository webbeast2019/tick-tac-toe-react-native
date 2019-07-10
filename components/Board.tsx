import React from 'react';
import {StyleSheet, View} from 'react-native';
import Square from './Square';
import {SquareValueType} from '../types';

interface IProps {
  squares: Array<SquareValueType>
  onPress: Function
}

const Board: React.FC<IProps> = ({squares, onPress}) => {
  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onPress={() => onPress(i)}
    />
  );

  return (
    <View>
      <View style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  )
};

export default Board;

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row' as 'row',
  }
});
