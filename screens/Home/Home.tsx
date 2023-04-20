import React from 'react';
import {
  GridItem,
  ImageGrid,
  ContainerFoodText,
  FoodText,
  TextMore,
  ContainerBanner,
  ImageBanner,
  ContainerLocation,
  TextLocation,
  ContainerRestaurants,
  ScrollViewCustom,
} from './styles';
import {Container, TitleText, ContainerText, GridContainer} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback, FlatList} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Restaurants from '../../components/UI/Restaurants/Restaurants';
import InputNavbar from '../../components/UI/Input/Input';
import {Colors} from '../../utilities/colors';

export type RootStackParamList = {
  Home: undefined;
  Category: {
    name: 'mascota' | 'comida' | 'fiesta' | 'regalo' | 'soporte' | 'bebidas';
  };
};

const images = [
  {id: 1, source: require('../../assets/br1.jpg')},
  {id: 2, source: require('../../assets/br2.jpg')},
];

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ScrollViewCustom>
      <ContainerLocation>
        <Icon2 name="location" size={25} color={Colors.orangeRed} />
        <TextLocation>Calle 1234</TextLocation>
      </ContainerLocation>

      <InputNavbar />

      <Container>
        <ContainerText>
          <TitleText>Secciones</TitleText>
          <TextMore>Ver Todos</TextMore>
        </ContainerText>

        <GridContainer>
          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'mascota',
                  });
                }}>
                <ImageGrid source={require('../../assets/dog.jpg')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Mascota</FoodText>
          </ContainerFoodText>

          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'comida',
                  });
                }}>
                <ImageGrid source={require('../../assets/burger.jpg')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Comida</FoodText>
          </ContainerFoodText>

          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'fiesta',
                  });
                }}>
                <ImageGrid source={require('../../assets/party.jpg')} />
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
                    name: 'regalo',
                  });
                }}>
                <ImageGrid source={require('../../assets/presentGif.jpg')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Regalo</FoodText>
          </ContainerFoodText>

          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'soporte',
                  });
                }}>
                <ImageGrid source={require('../../assets/soporte.png')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Soporte</FoodText>
          </ContainerFoodText>

          <ContainerFoodText>
            <GridItem>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Category', {
                    name: 'bebidas',
                  });
                }}>
                <ImageGrid source={require('../../assets/drink.png')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Bebidas</FoodText>
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

      <ContainerRestaurants>
        <Restaurants />
      </ContainerRestaurants>
    </ScrollViewCustom>
  );
};

export default Home;
