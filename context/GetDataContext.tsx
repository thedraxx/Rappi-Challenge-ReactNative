import {createContext} from 'react';
import {Producto} from '../interface/IdetailProducts';

export interface GetDataContextProps {
  isFetching: boolean;
  categories: Producto[];

  // Methods

  getProducts: (paramsName: string) => void;
}

export const GetDataContext = createContext({} as GetDataContextProps);
