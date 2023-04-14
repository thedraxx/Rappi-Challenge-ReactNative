import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home/Home';
import Hello from '../../../screens/Hello/Hello';
import Navigator from './Navigator';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="PrincipalScreen" component={Navigator} />
        <Tab.Screen name="Hello" component={Hello} />
      </Tab.Navigator>
    </View>
  );
};

export default ButtomTabNavigator;
