// 定義 import
import { REQUEST_STATE, REDUCER_POSTING_ACTION } from "../constants/constants";

// 型 import
import { OrderReducerActionType } from "../types/api/Order";

export const ordersReducer = (
  ordersPostFlag: { postStatus: string },
  action: OrderReducerActionType
) => {
  switch (action.type) {
    case REDUCER_POSTING_ACTION.posting:
      return {
        ...ordersPostFlag,
        postStatus: REQUEST_STATE.loading,
      };
    case REDUCER_POSTING_ACTION.post_success:
      return {
        ...ordersPostFlag,
        postStatus: REQUEST_STATE.ok,
      };
    default:
      throw new Error("注文を確定できませんでした。");
  }
};
