// ライブラリimport
import { useReducer, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

// コンポーネントimport
import { foodsIndex } from '../../urls/urlApi';
import { foodsReducer } from '../../reducers/foods';

// 型import
import { FoodsStateType, FoodIncludeRestaurant } from '../../types/api/Food';

// 定数import
import { REQUEST_STATE, REDUCER_FETCHING_ACTION } from '../../constants/constants';

export const useAuthFoods = () => {
  const foodsInitialState: FoodsStateType = {
    fetchStatus: REQUEST_STATE.INITIAL,
    foodsList: []
  };
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);

  const fetchFoods = useCallback((restaurantId: string): void => {
    dispatch({ type: REDUCER_FETCHING_ACTION.FETCHING, payload: [] });
    // axiosの返り値はPromiseオブジェクト
    axios
      .get<FoodIncludeRestaurant[]>(`${foodsIndex(restaurantId)}`)
      .then((res: AxiosResponse<FoodIncludeRestaurant[]>) => {
        const { data } = res;
        dispatch({
          type: REDUCER_FETCHING_ACTION.FETCH_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  }, []);
  return { fetchFoods, foodsState };
};
