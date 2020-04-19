/* import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screens/LoadingScreen';

import * as firebase from 'firebase';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyDFHe3zL02xTiH2cT7JA_gqLtG-kCzHOss',
  authDomain: 'meditation-cd7c9.firebaseapp.com',
  databaseURL: 'https://meditation-cd7c9.firebaseio.com',
  projectId: 'meditation-cd7c9',
  storageBucket: 'meditation-cd7c9.appspot.com',
  messagingSenderId: '498685922319',
  appId: '1:498685922319:web:efb19a10a9320f9912277a',
  measurementId: 'G-ZEB1GW702N',
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
); */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default App;
