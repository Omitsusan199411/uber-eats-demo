// ライブラリ import
import { useCallback, useReducer } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// コンポーネント import
import {
  REDUCER_POSTING_ACTION,
  REQUEST_STATE,
} from "../../constants/constants";
import { ordersReducer } from "../../reducers/orders";

// URL import
import { orders } from "../../urls/urlApi";

// 型 import
import { LineFoodsList } from "../../types/api/LineFood";

export const useAuthOrdersPost = () => {
  const history = useHistory();

  const initialOrdersPostFlag = {
    postStatus: REQUEST_STATE.initial,
  };

  const [ordersPostFlag, ordersDispatch] = useReducer(
    ordersReducer,
    initialOrdersPostFlag
  );

  const ordersPost = useCallback((lineFoodsIds: number[]): void => {
    // paramsには、orders_controllerの中のposted_line_foodsに仮注文のactive状態のid群（line_foods_controllerのindexメソッドで返る値（lineFoodsGet()の値））を代入できるようにparamsの値を設定する。
    // Ruby側で見ると、キーはシンボル型、値は配列型のハッシュ形式で送られる
    const params = {
      line_food_ids: [...lineFoodsIds],
    };
    axios
      .post(`${orders}`, params)
      .then(() => {
        ordersDispatch({
          type: REDUCER_POSTING_ACTION.post_success,
        });
      })
      .catch(() => {
        history.push("/");
      });
    ordersDispatch({
      type: REDUCER_POSTING_ACTION.posting,
    });
  }, []);
  return { ordersPost, ordersPostFlag };
};
