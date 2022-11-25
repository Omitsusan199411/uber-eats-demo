// 型 import
import { LineFoodsStateType, ReducerActionType } from '../types/api/LineFood';

// 定義 import
import { REQUEST_STATE, REDUCER_FETCHING_ACTION } from '../constants/constants';

export const lineFoodsReducer = (lineFoodsGetData: LineFoodsStateType, action: ReducerActionType) => {
  switch (action.type) {
    case REDUCER_FETCHING_ACTION.FETCHING:
      return {
        ...lineFoodsGetData,
        fetchStatus: REQUEST_STATE.LOADING
      };
    case REDUCER_FETCHING_ACTION.FETCH_SUCCESS:
      return {
        ...lineFoodsGetData,
        fetchStatus: REQUEST_STATE.OK,
        lineFoodsList: action.payload
      };
    default:
      throw new Error('注文情報を取得できませんでした');
  }
};
