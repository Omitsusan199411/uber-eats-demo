// restaurants型定義
export type Restaurant = {
  id: number;
  name: string;
  fee: number;
  time_required: number;
};

// api通信 lineFoods型定義
export type RestaurantsStateType = {
  fetchStatus: string;
  restaurantsList: Restaurant[];
};

// api lineFoods ReducerAction型定義
export type ReducerActionType = {
  payload: Restaurant[];
  type: string;
};
