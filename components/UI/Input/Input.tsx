import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ContainerInput, Input} from './Style';

const InputNavbar = () => {
  return (
    <ContainerInput>
      <Input placeholder="Buscar en Rappi..." />
      <LinearGradient
        colors={['#ff9999', '#ff6666']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{borderRadius: 17, padding: 15}}>
        <Icon name="search" size={20} color="#ffffff" />
      </LinearGradient>
      <View style={{padding: 10, left: 30, position: 'relative'}}>
        <Icon name="bell" size={22} color="orange" />
      </View>
    </ContainerInput>
  );
};

export default InputNavbar;
