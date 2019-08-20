import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Components/HomeScreen';
import MenuScreen from './src/Components/MenuScreen';

export default function App() {
  return (
    <MenuScreen/>
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
