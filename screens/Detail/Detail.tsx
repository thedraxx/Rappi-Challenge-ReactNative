import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {Category} from '../../components/database/categories';
import {products} from '../../components/database/products';

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
    Detail.map(item => {
      products.map(product => {
        if (product.subcategory_id === item.id) {
          setProductsDetails([...ProductsDetails, product]);
        }
      });
    });
  };

  return <View>{}</View>;
};

export default Detail;
