import React from 'react';
import {
  ContainerTitle,
  Title,
  Title2,
  ContainerBanner,
  ImageBanner,
} from './style';
import {FlatList} from 'react-native-gesture-handler';

const images = [
  {id: 3, source: require('../../../assets/TacosRestaurante.jpg')},
  {id: 5, source: require('../../../assets/PizzaRestaurante.jpg')},
  {id: 6, source: require('../../../assets/BurgerRestaurante.jpg')},
];

const Restaurants = () => {
  return (
    <>
      <ContainerTitle>
        <Title>Restaurantes</Title>
        <Title2>Ver todos</Title2>
      </ContainerTitle>

      <ContainerBanner>
        <FlatList
          data={images}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ImageBanner source={item.source} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ContainerBanner>
    </>
  );
};

export default Restaurants;
