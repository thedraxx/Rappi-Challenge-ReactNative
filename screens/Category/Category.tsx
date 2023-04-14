import React, {useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Category, categories} from '../../components/database/categories';
import {FlatList} from 'react-native-gesture-handler';
import {Button, Container, HeaderFlatList, Title} from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type ParamList = {
  Detail: {
    name: string;
  };
};

export type RootStackParamList = {
  Detail: {
    Detail: Category[];
  };
};

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {params} = useRoute<RouteProp<ParamList, 'Detail'>>();

  const [getCategories, setgetCategories] = useState<Category[]>();

  useEffect(() => {
    categories.categories.map(item => {
      if (item.name === params.name) {
        setgetCategories(item.subcategories);
      }
    });
  }, [params]);

  return (
    <Container>
      <FlatList
        data={getCategories}
        renderItem={({item}) => (
          <Button
            onPress={() => {
              navigation.navigate('Detail', {
                Detail: item.subcategories,
              });
            }}>
            <Title>{item.name}</Title>
          </Button>
        )}
        keyExtractor={item => item.name}
        ListFooterComponent={<HeaderFlatList />}
      />
    </Container>
  );
};

export default Home;
