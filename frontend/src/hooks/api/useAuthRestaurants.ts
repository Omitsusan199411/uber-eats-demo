// ライブラリimport
import axios, { AxiosResponse, AxiosError } from "axios";
import { useCallback, useReducer } from "react";

// コンポーネントimport
import { restaurants } from "../../urls/urlApi";
import { restaurantsReducer } from "../../reducers/restaurants";

// 型import
import { Restaurant, RestaurantsStateType } from "../../types/api/Restaurant";

// 定数import
import {
  REQUEST_STATE,
  REDUCER_FETCHING_ACTION,
} from "../../constants/constants";

export const useAuthRestaurants = () => {
  const restaurantsInitialState: RestaurantsStateType = {
    fetchStatus: REQUEST_STATE.initial,
    restaurantsList: [],
  };
  const [restaurantsData, dispatch] = useReducer(
    restaurantsReducer,
    restaurantsInitialState
  );

  // awaitで結果を待ってから後続の処理を実行する
  const fetchRestaurants = useCallback((): void => {
    dispatch({
      type: REDUCER_FETCHING_ACTION.fetching,
      payload: [],
    });
    // axiosの戻り値はPromiseオブジェクト、then()の戻り値もPromiseオブジェクト
    axios
      .get<Restaurant[]>(`${restaurants}`)
      .then((res: AxiosResponse<Restaurant[]>) => {
        const { data } = res;
        dispatch({
          type: REDUCER_FETCHING_ACTION.fetch_success,
          payload: data,
        });
      })
      .catch((error) => {
        try {
          throw new Error(error);
        }catch(error) {
          console.log(error);
        }
      });
  }, []);
  return { fetchRestaurants, restaurantsData };
};
