import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Category} from '../../components/database/categories';
// import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import axios from 'axios';
import {Producto, ProductoDetalle} from '../../interface/IdetailProducts';
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

  // ...
];

const Home = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Detail'>>();
  const [Categories, setCategories] = useState<Producto[]>([]);

  useEffect(() => {
    getDetailsProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const getDetailsProducts = async () => {
    try {
      const {data} = await axios.get<ProductoDetalle>(
        'http://192.168.100.10:8080/api/usuarios/',
      );

      if (data) {
        const filter = data.productos.filter(item => item.tipo === params.name);
        setCategories(filter);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

        {Categories.length === 0 ? (
          <ContainerNoProduct>
            <TitleNoProduct> No hay Productos para mostrar </TitleNoProduct>
          </ContainerNoProduct>
        ) : (
          <FlatList
            data={Categories}
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
