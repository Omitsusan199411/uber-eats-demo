// 型import
import { FoodsReducerActionType, FoodsStateType } from "../types/api/Foods";

// 定数import
import { REQUEST_STATE, REDUCER_FETCHING_ACTION } from "../constants/constants";

export const foodsReducer = (
  foodsData: FoodsStateType,
  action: FoodsReducerActionType
) => {
  switch (action.type) {
    case REDUCER_FETCHING_ACTION.fetching:
      return {
        ...foodsData,
        fetchStatus: REQUEST_STATE.loading,
        foodsList: [],
      };
    case REDUCER_FETCHING_ACTION.fetch_success:
      return {
        ...foodsData,
        fetchStatus: REQUEST_STATE.ok,
        foodsList: action.payload,
      };
    default:
      throw new Error("フード情報を取得できませんでした");
  }
};
