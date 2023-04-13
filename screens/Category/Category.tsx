import React, {useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Category, categories} from '../../components/database/categories';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Container, HeaderFlatList, Title} from './style';
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', {
                Detail: item.subcategories,
              });
            }}>
            <Title>{item.name}</Title>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
        ListFooterComponent={<HeaderFlatList />}
      />
    </Container>
  );
};

export default Home;
