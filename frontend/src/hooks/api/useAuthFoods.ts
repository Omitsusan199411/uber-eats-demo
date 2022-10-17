// ライブラリimport
import { useReducer, useCallback } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

// コンポーネントimport
import { foodsIndex } from "../../urls/urlApi";
import { foodsReducer } from "../../reducers/foods";

// 型import
import {
  Food,
  FoodsStateType,
  FoodIncludeRestaurant,
} from "../../types/api/Food";

// 定数import
import {
  REQUEST_STATE,
  REDUCER_FETCHING_ACTION,
} from "../../constants/constants";

export const useAuthFoods = () => {
  const foodsInitialState: FoodsStateType = {
    fetchStatus: REQUEST_STATE.initial,
    foodsList: [],
  };
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);

  const fetchFoods = useCallback((restaurant_id: string): void => {
    dispatch({ type: REDUCER_FETCHING_ACTION.fetching, payload: [] });
    axios
      .get<FoodIncludeRestaurant[]>(`${foodsIndex(restaurant_id)}`)
      .then((res: AxiosResponse<FoodIncludeRestaurant[]>) => {
        const { data } = res;
        console.log(data);
        dispatch({
          type: REDUCER_FETCHING_ACTION.fetch_success,
          payload: data,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  console.log(foodsState);
  return { fetchFoods, foodsState };
};
