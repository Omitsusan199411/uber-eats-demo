// ライブラリ import
import { useCallback, useReducer } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// コンポーネント import
import { ordersReducer } from "../../reducers/orders";
import {
  REQUEST_STATE,
  REDUCER_POSTING_ACTION,
} from "../../constants/constants";

// URL import
import { orders } from "../../urls/urlApi";

export const useAuthOrdersPost = () => {
  const intialOrdersPostFlag: { postStatus: string } = {
    postStatus: REQUEST_STATE.initial,
  };
  const [ordersPostFlag, dispatch] = useReducer(
    ordersReducer,
    intialOrdersPostFlag
  );
  const history = useHistory();
  const ordersPost = useCallback((lineFoodsIds: number[]): void => {
    // paramsには、orders_controllerの中のposted_line_foodsに仮注文のactive状態のid群（line_foods_controllerのindexメソッドで返る値（lineFoodsGet()の値））を代入できるようにparamsの値を設定する。
    // Ruby側で見ると、キーはシンボル型、値は配列型のハッシュ形式で送られる
    const params = {
      line_food_ids: [...lineFoodsIds],
    };
    axios
      .post(`${orders}`, params)
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((error) => {
        console.log(error.data);
        history.push("/");
      });
    dispatch({
      type: REDUCER_POSTING_ACTION.posting,
    });
  }, []);
  return { ordersPost, ordersPostFlag };
};
