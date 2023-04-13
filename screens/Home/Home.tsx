import React from 'react';
import {GridItem, ImageGrid, ContainerFoodText, FoodText} from './styles';
import {Container, TitleText, ContainerText, GridContainer} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Category: {
    name: 'food' | 'party' | 'present' | 'Licor';
  };
};

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <ContainerText>
        <TitleText>
          Te ayudamos a encontrar La comida perfecta para cada ocasion
        </TitleText>
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
                  name: 'Licor',
                });
              }}>
              <ImageGrid source={require('../../assets/wine.jpg')} />
            </TouchableWithoutFeedback>
          </GridItem>
          <FoodText>Licor</FoodText>
        </ContainerFoodText>
      </GridContainer>
    </Container>
  );
};

export default Home;
