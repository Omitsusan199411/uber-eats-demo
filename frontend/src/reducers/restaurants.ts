// 定数import
import { REQUEST_STATE } from "../constants/constants";

// 型import
import { Restaurant } from "../types/api/Restaurant";
import { RestaurantsStateType } from "../components/pages/Restaurants";

// action型定義
export type ReducerActionType = {
  payload: Restaurant[];
  type: string;
};

// API通信でrestaurants情報を取得する際のactionのタイプ（今、API通信がどの状態かを指す）
export const apiActionConditions = {
  fetching: "fetching",
  fetch_success: "fetch_success",
};

export const restaurantsReducer = (
  restaurantsData: RestaurantsStateType,
  action: ReducerActionType
) => {
  switch (action.type) {
    case apiActionConditions.fetching:
      return {
        ...restaurantsData,
        fetchState: REQUEST_STATE.loading,
      };
    case apiActionConditions.fetch_success:
      return {
        ...restaurantsData,
        fetchState: REQUEST_STATE.ok,
        restaurantsList: action.payload,
      };
    default:
      throw new Error();
  }
};
