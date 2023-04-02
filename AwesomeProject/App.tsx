import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
