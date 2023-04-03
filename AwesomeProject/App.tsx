import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemoScreen from './screens/DemoScreen';

export type RootStackParameterList = {
  Home: undefined;
  PayWall: undefined;
  Demo: undefined;
}; 

const Stack = createNativeStackNavigator<RootStackParameterList>();

export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="Demo" options={{ headerShown: false }} component={DemoScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}