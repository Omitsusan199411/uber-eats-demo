// 型 import
import { Restaurant } from "./Restaurant";

export type LineFood = {
  food_id: number;
  restaurant_id: number;
  order_id: number;
  count: number;
  active: boolean;
};

// api通信 lineFoodListの型
export type LineFoodsList = {
  line_food_ids: number[];
  restaurant: Restaurant;
  count: number;
  amount: number;
};

// api通信 restaurants型定義
export type LineFoodsStateType = {
  fetchStatus: string;
  postStatus: string;
  lineFoodsList: LineFoodsList;
};

// api restaurants ReducerAction型定義
export type ReducerActionType = {
  payload: LineFoodsList;
  type: string;
};
