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

export const useAuthOrdersPost = () => {
  // OrdersPostFlagの初期値を作成
  const initialOrdersPostFlag = {
    postStatus: REQUEST_STATE.initial,
  };

  const [ordersPostFlag, ordersDispatch] = useReducer(
    ordersReducer,
    initialOrdersPostFlag
  );

  const history = useHistory();

  const ordersPost = useCallback((lineFoodsIds: number[]): void => {
    // paramsには、orders_controllerの中のposted_line_foodsに仮注文のactive状態のid群（line_foods_controllerのindexメソッドで返る値（lineFoodsGet()の値））を代入できるようにparamsの値を設定する。
    // Ruby側で見ると、キーはシンボル型、値は配列型のハッシュ形式で送られる
    const params = {
      line_food_ids: [...lineFoodsIds],
    };
    // axiosの返り値はPromiseオブジェクト
    axios
      .post(`${orders}`, params)
      .then(() => {
        ordersDispatch({
          type: REDUCER_POSTING_ACTION.post_success,
        });
        throw new Error("ordersDispatch処理に失敗しました");
      })
      .catch((error) => {
        console.log(error);
        history.push("/page500");
      });
    ordersDispatch({
      type: REDUCER_POSTING_ACTION.posting,
    });
    throw new Error("ordersDispatch処理に失敗しました");
  }, []);
  return { ordersPost, ordersPostFlag };
};
