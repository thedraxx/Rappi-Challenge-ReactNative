import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ButtomTabNavigator from './components/UI/Navigator/ButtomTabNavigator';
import {GetDataProvider} from './context';

const App = () => {
  return (
    <>
      <GetDataProvider>
        <NavigationContainer>
          <ButtomTabNavigator />
        </NavigationContainer>
      </GetDataProvider>
    </>
  );
};

export default App;
