// 型 import
import { LineFoodsStateType, ReducerActionType } from "../types/api/LineFood";

// 定義 import
import {
  REQUEST_STATE,
  REDUCER_FETCHING_ACTION,
  REDUCER_POSTING_ACTION,
} from "../constants/constants";

export const lineFoodsReducer = (
  lineFoodsGetData: LineFoodsStateType,
  action: ReducerActionType
) => {
  switch (action.type) {
    case REDUCER_FETCHING_ACTION.fetching:
      return {
        ...lineFoodsGetData,
        fetchStatus: REQUEST_STATE.loading,
      };
    case REDUCER_FETCHING_ACTION.fetch_success:
      return {
        ...lineFoodsGetData,
        fetchStatus: REQUEST_STATE.ok,
        lineFoodsList: action.payload,
      };
    case REDUCER_POSTING_ACTION.posting:
      return {
        ...lineFoodsGetData,
        postStatus: REQUEST_STATE.loading,
      };
    case REDUCER_POSTING_ACTION.post_success:
      return {
        ...lineFoodsGetData,
        postStatus: REQUEST_STATE.ok,
      };
    default:
      throw new Error("注文情報を取得できませんでした");
  }
};
