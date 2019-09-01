import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/Components/HomeScreen';
import MenuScreen from './src/Components/MenuScreen';
import HasilScreen from './src/Components/HasilScreen';
import DescScreen from './src/Components/DescScreen';

import Main from './src/Components/routes/Route';

export default function App() {
  return (
    <Main/>
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
