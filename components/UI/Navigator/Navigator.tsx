import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Home/Home';
import Category from '../../../screens/Category/Category';
import Detail from '../../../screens/Detail/Detail';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {ContainerInput, Input} from './style';

type InputHeaderProps = {
  header: string;
};

const InputHeader = ({header}: InputHeaderProps) => {
  return (
    <ContainerInput>
      <Input placeholder={`${header}`} />
      <LinearGradient
        colors={['#ff9999', '#ff6666']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{borderRadius: 15, padding: 12}}>
        <Icon name="search" size={15} color="#ffffff" />
      </LinearGradient>
    </ContainerInput>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Category: {
    name: 'food' | 'party' | 'present' | 'Licores';
  };
  Detail: {
    id: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false, // Oculta el encabezado para esta pantalla
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{
            headerTitle: () => <InputHeader header={'¿Que quieres comer?'} />,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTitle: () => (
              <InputHeader header={'¿Buscas mas productos?'} />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Navigator;
