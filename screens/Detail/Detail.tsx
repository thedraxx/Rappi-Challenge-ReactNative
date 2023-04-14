import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {Category} from '../../components/database/categories';
import {products} from '../../components/database/products';
import {ContainerDetail} from './style';

type ParamList = {
  Detail: Category[];
};

type RootStackParamList = {
  id: number;
  subcategory_id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  stock: number;
};

const Detail = () => {
  const route = useRoute<RouteProp<Record<string, ParamList>>>();
  const [ProductsDetails, setProductsDetails] = useState<RootStackParamList[]>(
    [],
  );
  const {Detail} = route.params;

  useEffect(() => {
    getDetailsProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Detail]);

  const getDetailsProduct = () => {
    const newProductsDetails = Detail.reduce(
      (acc: RootStackParamList[], item: any) => {
        const foundProducts = products.filter(
          product => product.subcategory_id === item.id,
        );
        return [...acc, ...foundProducts];
      },
      [],
    );
    setProductsDetails(newProductsDetails);
  };

  return (
    <ContainerDetail>
      {ProductsDetails.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.description}</Text>
          </View>
        );
      })}
    </ContainerDetail>
  );
};

export default Detail;
