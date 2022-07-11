// Foods型定義
export type Food = {
  id: number;
  restaurant_id: number;
  name: string;
  price: number;
  description: string;
};

// api通信 restaurants型定義
export type FoodsStateType = {
  fetchStatus: string;
  foodsList: Food[];
};

// api restaurants ReducerAction型定義
export type FoodsReducerActionType = {
  payload: Food[];
  type: string;
};

// useParamsで取得するrestaurant_idを取得
export type RestaurantId = {
  restaurant_id: number;
};
