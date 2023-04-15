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
  ContainerLocation,
  TextLocation,
  ContainerRestaurants,
  ScrollViewCustom,
} from './styles';
import {Container, TitleText, ContainerText, GridContainer} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback, FlatList} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Restaurants from '../../components/UI/Restaurants/Restaurants';

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
    <ScrollViewCustom>
      <ContainerLocation>
        <Icon2 name="location" size={25} color="#ff6666" />
        <TextLocation>Calle 1234</TextLocation>
      </ContainerLocation>

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
                    name: 'food',
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
                    name: 'food',
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
                    name: 'party',
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
                    name: 'present',
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
                    name: 'present',
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
                    name: 'Licores',
                  });
                }}>
                <ImageGrid source={require('../../assets/drink.png')} />
              </TouchableWithoutFeedback>
            </GridItem>
            <FoodText>Alcohol</FoodText>
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
