import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Hello from '../../../screens/Hello/Hello';
import Navigator from './Navigator';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/dist/MaterialIcons';

const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ff6666',
          tabBarInactiveTintColor: '#5e5e5e',
        }}>
        <Tab.Screen
          name="PrincipalScreen"
          component={Navigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Ofertas"
          component={Hello}
          options={{
            tabBarLabel: 'Ofertas',
            tabBarIcon: ({color}) => (
              <Icon3 name="local-offer" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={Hello}
          options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({color}) => (
              <Icon name="search" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Soporte"
          component={Hello}
          options={{
            tabBarLabel: 'Soporte',
            tabBarIcon: ({color}) => (
              <Icon2 name="face-agent" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Mi Perfil"
          component={Hello}
          options={{
            tabBarLabel: 'Mi Perfil',
            tabBarIcon: ({color}) => (
              <Icon2 name="account" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default ButtomTabNavigator;
