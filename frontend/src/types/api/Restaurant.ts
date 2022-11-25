// restaurants型定義
export type Restaurant = {
  id: number;
  name: string;
  fee: number;
  timeRequired: number;
};

// api通信 lineFoods型定義
export type RestaurantsStateType = {
  fetchStatus: string;
  restaurantsList: Restaurant[];
};

// RestaurantsLayoutとRestaurantsListへ渡すprops
export type RestaurantsListProps = {
  restaurantsList: Restaurant[];
};

// api lineFoods ReducerAction型定義
export type ReducerActionType = {
  payload: Restaurant[];
  type: string;
};

// Restaurantカードに渡すPropsの型定義
export type RestaurantsCardProps = {
  restaurant: Restaurant;
};
