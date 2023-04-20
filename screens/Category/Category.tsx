import React, {useContext, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {Category} from '../../components/database/categories';
// import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {
  ContainerBanner,
  ContainerImageInfo,
  ContainerNoProduct,
  ContainerProduct,
  ContainerProductoIndividual,
  ContainerTitleAndInfo,
  ContainerTitleBanner,
  ContainerTitleGeneral,
  ImageBanner,
  ImageProduct,
  SubTitleProduct,
  TitleGeneral,
  TitleNoProduct,
  TitleProduct,
  TitlePromAndMore,
} from './style';
import {FlatList} from 'react-native-gesture-handler';
import {GetDataContext} from '../../context';
import {ActivityIndicator} from 'react-native';
import {Colors} from '../../utilities/colors';

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

const images = [
  {id: 1, source: require('../../assets/banner3.jpg')},
  {id: 2, source: require('../../assets/banner4.jpg')},
];

const Home = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Detail'>>();
  const {getProducts, isFetching, categories} = useContext(GetDataContext);

  useEffect(() => {
    getProducts(params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <>
      <ContainerBanner>
        <ContainerTitleBanner>
          <TitlePromAndMore>Promos y mas</TitlePromAndMore>
        </ContainerTitleBanner>
        <FlatList
          data={images}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ImageBanner source={item.source} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ContainerBanner>
      <ContainerProduct>
        <ContainerTitleGeneral>
          <TitleGeneral>Recomendados para ti</TitleGeneral>
        </ContainerTitleGeneral>

        {isFetching ? (
          <ContainerNoProduct>
            <ActivityIndicator size="large" color={Colors.orangeRed} />
          </ContainerNoProduct>
        ) : categories.length === 0 ? (
          <ContainerNoProduct>
            <TitleNoProduct> No hay Productos para mostrar </TitleNoProduct>
          </ContainerNoProduct>
        ) : (
          <FlatList
            data={categories}
            renderItem={({item}) => (
              <ContainerProductoIndividual key={item._id}>
                <ContainerImageInfo>
                  <ImageProduct
                    source={{
                      uri: `${item.imagen}`,
                    }}
                  />
                  <ContainerTitleAndInfo>
                    <TitleProduct>{item.nombre}</TitleProduct>
                    <SubTitleProduct>
                      Cantidad Disponible: {item.cantidad}
                    </SubTitleProduct>
                  </ContainerTitleAndInfo>
                </ContainerImageInfo>
              </ContainerProductoIndividual>
            )}
          />
        )}
      </ContainerProduct>
    </>
  );
};

export default Home;
