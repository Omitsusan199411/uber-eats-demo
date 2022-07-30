// 型 import
import { EmptyObject } from "../../types/object/EmptyObject";

// Food型定義
export type Food = {
  id: number;
  restaurant_id: number;
  name: string;
  price: number;
  description: string;
};

// api(Getメソッド)通信で取得するfoodsStateの型定義
export type FoodsStateType = {
  fetchStatus: string;
  foodsList: Food[];
};

// api(Getメソッド)通信 foods ReducerAction型定義
export type FoodsReducerActionType = {
  payload: Food[];
  type: string;
};

// useParamsで取得するrestaurant_idを取得
export type RestaurantId = {
  restaurant_id: number;
};

// api（Postメソッド）通信 foods axiosリクエスト型定義
export type FoodPostRequest = {
  food_id: number;
  count: number;
};

// api(Postメソッド) 通信 foods axiosエラーレスポンス型定義
export type FoodsPostErrorResponse = {
  error: string;
};

// foodReplace
export type NewFoodReplace = {
  isOpen: boolean;
  newReplaceSelectedFood: Food | EmptyObject;
};
