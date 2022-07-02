// 定数import
import { REQUEST_STATE } from "../constants/constants";

// 型import
import { Restaurant } from "../types/api/Restaurant";
import { RestaurantsStateType } from "../components/pages/Restaurants";

// action型定義
export type ReducerActionType = {
  type: string;
  payload?: {
    restaurants: Restaurant[];
  };
};

// API通信でrestaurants情報を取得する際のactionのタイプ（今、API通信がどの状態かを指す）
export const restaurantsActionConditions = {
  fetching: "fetching",
  fetch_success: "fetch_success",
};

export const restaurantsReducer = (
  state: RestaurantsStateType,
  action: ReducerActionType
) => {
  switch (action.type) {
    case restaurantsActionConditions.fetching:
      return {
        ...state,
        fetchState: REQUEST_STATE.loading,
      };
    case restaurantsActionConditions.fetch_success:
      return {
        fetchState: REQUEST_STATE.ok,
        restaurantsList: action.payload?.restaurants,
      };
    default:
      throw new Error();
  }
};
