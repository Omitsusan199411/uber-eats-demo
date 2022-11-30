// 定数import
import { REQUEST_STATE, REDUCER_FETCHING_ACTION } from '../constants/constants';

// 型import
import { RestaurantsStateType, ReducerActionType } from '../types/api/Restaurant';

export const restaurantsReducer = (restaurantsData: RestaurantsStateType, action: ReducerActionType) => {
  switch (action.type) {
    case REDUCER_FETCHING_ACTION.FETCHING:
      return {
        ...restaurantsData,
        fetchStatus: REQUEST_STATE.LOADING
      };
    case REDUCER_FETCHING_ACTION.FETCH_SUCCESS:
      return {
        ...restaurantsData,
        fetchStatus: REQUEST_STATE.OK,
        restaurantsList: action.payload
      };
    default:
      throw new Error('店舗情報を取得できませんでした');
  }
};
