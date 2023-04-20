import {useReducer} from 'react';
import {GetDataContext, getDataReducer} from './';
import {Producto, ProductoDetalle} from '../interface/IdetailProducts';
import axios from 'axios';

export interface GetDataState {
  isFetching: boolean;
  categories: Producto[];
}

const GetData_INITIAL_STATE: GetDataState = {
  isFetching: false,
  categories: [],
};

interface Props {
  children: React.ReactNode;
}

export const GetDataProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(getDataReducer, GetData_INITIAL_STATE);

  const getProducts = async (paramsName: string) => {
    dispatch({type: '[GetData] - isFetching', payload: true});

    try {
      const {data} = await axios.get<ProductoDetalle>(
        'http://192.168.100.10:8080/api/usuarios/',
      );

      if (data) {
        const filter = data.productos.filter(item => item.tipo === paramsName);

        dispatch({type: '[GetData] - isFetching', payload: false});
        dispatch({type: '[GetData] - addData', payload: filter});
      }
    } catch (error) {
      console.log(error);
      dispatch({type: '[GetData] - isFetching', payload: false});
    }
  };

  return (
    <GetDataContext.Provider
      value={{
        ...state,
        getProducts,
      }}>
      {children}
    </GetDataContext.Provider>
  );
};
