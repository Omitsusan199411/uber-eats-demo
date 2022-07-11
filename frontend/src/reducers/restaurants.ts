// 定数import
import { REQUEST_STATE, REDUCER_FETCHING_ACTION } from "../constants/constants";

// 型import
import {
  RestaurantsStateType,
  ReducerActionType,
} from "../types/api/Restaurant";

export const restaurantsReducer = (
  restaurantsData: RestaurantsStateType,
  action: ReducerActionType
) => {
  switch (action.type) {
    case REDUCER_FETCHING_ACTION.fetching:
      return {
        ...restaurantsData,
        fetchStatus: REQUEST_STATE.loading,
      };
    case REDUCER_FETCHING_ACTION.fetch_success:
      return {
        ...restaurantsData,
        fetchStatus: REQUEST_STATE.ok,
        restaurantsList: action.payload,
      };
    default:
      throw new Error("店舗情報を取得できませんでした");
  }
};
