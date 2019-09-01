import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {Ionicons, SimpleLineIcons} from 'react-native-vector-icons';

import DescScreen from './../DescScreen';
import HasilScreen from './../HasilScreen';
import HomeScreen from './../HomeScreen';
import MenuScreen from './../MenuScreen';
import TentangScreen from './../TentangScreen'

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Menu: MenuScreen,
  Hasil: HasilScreen,
  Desc: DescScreen,
  Tentang: TentangScreen
},{
  initialRouteName:'Home',
  headerMode: 'none'
})

export default (Main = createAppContainer (
  createSwitchNavigator (
    {
      Pertama: MainStack,
    },
    {
      initialRouteName: 'Pertama',
      headerMode: 'none',
    }
  )
));
