import React from 'react';
import {
  GridItem,
  ImageGrid,
  ContainerFoodText,
  FoodText,
  ContainerInput,
  Input,
  TextMore,
  ContainerBanner,
  ImageBanner,
} from './styles';
import {Container, TitleText, ContainerText, GridContainer} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback, FlatList} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Category: {
    name: 'food' | 'party' | 'present' | 'Licores';
  };
};

const images = [
  {id: 1, source: require('../../assets/br1.jpg')},
  {id: 2, source: require('../../assets/br2.jpg')},

  // ...
];

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <>
      <ContainerInput>
        <Input placeholder="Buscar en Rappi..." keyboardType="numeric" />
        <Text>xd</Text>
      </ContainerInput>

      <Container>
        <ContainerText>
          <TitleText>Secciones</TitleText>
          <TextMore>Ver mas</TextMore>
        </ContainerText>

        <GridContainer>
          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'food',
                  });
                }}>
                <ImageGrid source={require('../../assets/burger.png')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Comida</FoodText>
          </ContainerFoodText>

          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'party',
                  });
                }}>
                <ImageGrid source={require('../../assets/hat.jpg')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Fiesta</FoodText>
          </ContainerFoodText>
        </GridContainer>

        <GridContainer>
          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'present',
                  });
                }}>
                <ImageGrid source={require('../../assets/present.jpg')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Regalo</FoodText>
          </ContainerFoodText>

          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'Licores',
                  });
                }}>
                <ImageGrid source={require('../../assets/wine.jpg')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Licor</FoodText>
          </ContainerFoodText>
        </GridContainer>
      </Container>

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

export default Home;
