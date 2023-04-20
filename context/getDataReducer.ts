import {GetDataState} from './';

type GetDataActionType =
  | {type: '[GetData] - isFetching'; payload: boolean}
  | {type: '[GetData] - addData'; payload: any};

export const getDataReducer = (
  state: GetDataState,
  action: GetDataActionType,
): GetDataState => {
  switch (action.type) {
    case '[GetData] - isFetching':
      return {
        ...state,
        isFetching: action.payload,
      };

    case '[GetData] - addData':
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};
