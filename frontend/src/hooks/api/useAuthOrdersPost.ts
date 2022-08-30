// ライブラリ import
import { useCallback } from "react";
import axios from "axios";

// コンポーネント import

// URL import
import { orders } from "../../urls/urlApi";

export const useAuthOrdersPost = () => {
  const ordersPost = useCallback((): void => {
  //  paramsには、orders_controllerの中のposted_line_foodsに仮注文のactive状態のid群（line_foods_controllerのindexメソッドで返る値（lineFoodsGet()の値））を代入できるようにparamsの値を設定する。
    const params = {
      line_food_ids:
    };
    axios
      .post(`${orders}`)
      .then(() => {})
      .catch(() => {});
  }, []);
};
