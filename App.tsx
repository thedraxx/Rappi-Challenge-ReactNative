import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navbar from './components/UI/Navbar/Navbar';

const App = () => {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
};

export default App;
