import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {SquareValueType} from '../types';

interface IProps {
  value: SquareValueType
  onPress: Function
}

const Square: React.FC<IProps> = ({value, onPress}) => {
  const onPressAction = () => onPress();
  
  return (
    <TouchableHighlight onPress={onPressAction} underlayColor="white">
      <View style={styles.squareContainer}>
        <Text style={styles.squareText}>{value}</Text>
      </View>
    </TouchableHighlight>
  )
};

export default Square;

const styles = StyleSheet.create({
  squareContainer: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  squareText: {
    fontSize: 30
  },
});