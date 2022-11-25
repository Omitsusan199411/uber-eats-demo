// 型import
import { FoodsReducerActionType, FoodsStateType } from '../types/api/Food';

// 定数import
import { REQUEST_STATE, REDUCER_FETCHING_ACTION } from '../constants/constants';

export const foodsReducer = (foodsData: FoodsStateType, action: FoodsReducerActionType) => {
  switch (action.type) {
    case REDUCER_FETCHING_ACTION.FETCHING:
      return {
        ...foodsData,
        fetchStatus: REQUEST_STATE.LOADING
      };
    case REDUCER_FETCHING_ACTION.FETCH_SUCCESS:
      return {
        ...foodsData,
        fetchStatus: REQUEST_STATE.OK,
        foodsList: action.payload
      };
    default:
      throw new Error('フード情報を取得できませんでした');
  }
};
