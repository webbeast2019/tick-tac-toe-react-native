import React from 'react';
import {StyleSheet, View} from 'react-native';
import Square from './components/Square';

export default function App() {
  return (
    <View style={styles.container}>
      <Square value={'X'} onPress={() => console.log('square')}/>
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
