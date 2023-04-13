import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Home/Home';
import Category from '../../../screens/Category/Category';
import Detail from '../../../screens/Detail/Detail';

export type RootStackParamList = {
  Home: undefined;
  Category: undefined;
  Detail: {
    id: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navbar = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </>
  );
};

export default Navbar;
