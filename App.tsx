import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ButtomTabNavigator from './components/UI/Navigator/ButtomTabNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <ButtomTabNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
