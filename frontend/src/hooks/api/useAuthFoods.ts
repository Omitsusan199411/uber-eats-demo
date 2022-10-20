// ライブラリimport
import { useReducer, useCallback } from "react";
import axios, { AxiosResponse } from "axios";

// コンポーネントimport
import { foodsIndex } from "../../urls/urlApi";
import { foodsReducer } from "../../reducers/foods";

// 型import
import { FoodsStateType, FoodIncludeRestaurant } from "../../types/api/Food";

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
        dispatch({
          type: REDUCER_FETCHING_ACTION.fetch_success,
          payload: data,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  return { fetchFoods, foodsState };
};
