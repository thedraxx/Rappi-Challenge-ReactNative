import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const Home = () => {
  const {params} = useRoute();

  return (
    <View>
      <Text>Producto</Text>
    </View>
  );
};

export default Home;
