// 定義 import
import { REQUEST_STATE, REDUCER_POSTING_ACTION } from '../constants/constants';

// 型 import
import { OrderReducerActionType } from '../types/api/Order';

export const ordersReducer = (ordersPostFlag: { postStatus: string }, action: OrderReducerActionType) => {
  switch (action.type) {
    case REDUCER_POSTING_ACTION.POSTING:
      return {
        ...ordersPostFlag,
        postStatus: REQUEST_STATE.LOADING
      };
    case REDUCER_POSTING_ACTION.POST_SUCCESS:
      return {
        ...ordersPostFlag,
        postStatus: REQUEST_STATE.OK
      };
    default:
      throw new Error('注文を確定できませんでした。');
  }
};
