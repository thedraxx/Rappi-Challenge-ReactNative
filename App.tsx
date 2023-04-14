import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ButtomTabNavigator from './components/UI/Navigator/ButtomTabNavigator';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <NavigationContainer>
        <ButtomTabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
