// ライブラリ import
import { Dispatch, SetStateAction } from "react";

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

// FoodCard Props型定義
export type FoodsCardProps = {
  foodInfo: Food;
  onClickFood: () => void;
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

// Food Modalのstateの型
export type FoodModal = {
  isFoodModalOpen: boolean;
  isFoodReplaceModalOpen: boolean;
  selectedFood: Food | EmptyObject;
  selectedFoodCount: number;
  existingRestaurant: string | null;
  newRestaurant: string | null;
};

// api（Postメソッド）通信 foods axiosリクエスト型定義
export type FoodPostRequest = {
  food_id: number;
  count: number;
};

// foodReplace
export type NewFoodReplace = {
  isOpen: boolean;
  newReplaceSelectedFood: Food | EmptyObject;
};
