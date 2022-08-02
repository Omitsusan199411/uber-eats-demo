export type LineFood = {
  food_id: number;
  restaurant_id: number;
  order_id: number;
  count: number;
  active: boolean;
};

// api通信 restaurants型定義
export type LineFoodsStateType = {
  fetchStatus: string;
  lineFoodsList: LineFood[];
};

// api restaurants ReducerAction型定義
export type ReducerActionType = {
  payload: LineFood[];
  type: string;
};
