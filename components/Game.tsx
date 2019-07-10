import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Board from './Board';
import {SquareValueType} from '../types';

interface IProps {
}

const squaresInitValue = Array(9).fill(null);

const Game: React.FC<IProps> = () => {
  const [squares, setSquares] = useState<Array<SquareValueType>>(squaresInitValue);
  const [xIsNext, setXIsNext] = useState(false);
  
  const restart = () => {
    setXIsNext(true);
    setSquares(squaresInitValue);
  };
  
  const updateNext = () => {
    setXIsNext(!xIsNext);
  };
  
  const updateSquares = (i: number, val: SquareValueType) => {
    const updatedSquares = [...squares];
    updatedSquares[i] = val;
    setSquares(updatedSquares);
  };
  
  const handleClick = (i: number) => {
    // game is won or square already played
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    const nextValue = xIsNext ? 'X' : 'O';
    updateNext();
    updateSquares(i, nextValue);
  };
  
  const winner = calculateWinner(squares);
  
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        {(winner)
          ? `Winner: ${winner}`
          : `Next Move: ${xIsNext ? 'X' : 'O'}`
        }
      </Text>
      <Board
        squares={squares}
        onPress={(i: number) => handleClick(i)}
      />
      <View style={styles.restartContainer}>
        <Button title="Restart" onPress={restart}/>
      </View>
    </View>
  
  )
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column' as 'column',
    // alignItems: 'center'
  },
  statusText: {
    height: 100,
    fontSize: 25,
    textAlign: 'center'
  },
  restartContainer: {
    height: 100,
    justifyContent: 'center'
  }
});

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
