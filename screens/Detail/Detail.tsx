import React, {useEffect, useState} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {Category} from '../../components/database/categories';
import {products} from '../../components/database/products';
import {
  ContainerInfo,
  ContainerProduct,
  DescriptionProduct,
  ImageProduct,
  TitleProduct,
} from './style';
import {FlatList} from 'react-native';

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
  img: string;
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
    <>
      <FlatList
        data={ProductsDetails}
        renderItem={({item}) => (
          <ContainerProduct>
            <ImageProduct source={{uri: item.img}} />
            <ContainerInfo>
              <TitleProduct>{item.name}</TitleProduct>
              <DescriptionProduct>
                StockDisponible: {item.stock}
              </DescriptionProduct>
            </ContainerInfo>
          </ContainerProduct>
        )}
        keyExtractor={item => item.id.toString()}
      />

      {/* {ProductsDetails.map((item, index) => {
        return (
          <ContainerProduct key={index}>
            <ImageProduct source={{uri: item.img}} />
            <ContainerInfo>
              <TitleProduct>{item.name}</TitleProduct>
              <DescriptionProduct>
                StockDisponible: {item.stock}
              </DescriptionProduct>
            </ContainerInfo>
          </ContainerProduct>
        );
      })} */}
    </>
  );
};

export default Detail;
