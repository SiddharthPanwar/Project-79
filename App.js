import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen'
import ExchangeScreen from './screens/ExchangeScreen'


export default class App extends React.Component {
  render(){
  return (
     <AppContainer/>
  );
  }
}

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {screen : HomeScreen,
    navigationOptions:{
        tabBarLabel : "Home"
    }
    },
    ExchangeScreen : {screen : ExchangeScreen,
        navigationOptions:{
            tabBarLabel : "Exchange"
        }
    }
})

const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen : {screen : SignUpLoginScreen},
  AppTabNavigator : {screen:AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)
