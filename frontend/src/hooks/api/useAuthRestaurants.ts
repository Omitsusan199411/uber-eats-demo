// ライブラリimport
import axios, { AxiosResponse, AxiosError } from "axios";
import { useCallback, useReducer } from "react";

// コンポーネントimport
import { restaurants } from "../../urls/urlApi";
import {
  apiActionConditions,
  restaurantsReducer,
} from "../../reducers/restaurants";

// 型import
import { Restaurant } from "../../types/api/Restaurant";
import { RestaurantsStateType } from "../../components/pages/Restaurants";

// 定数import
import { REQUEST_STATE } from "../../constants/constants";

export const useAuthRestaurants = () => {
  const initialState: RestaurantsStateType = {
    fetchState: REQUEST_STATE.initial,
    restaurantsList: [],
  };
  const [restaurantsData, dispatch] = useReducer(
    restaurantsReducer,
    initialState
  );

  // awaitで結果を待ってから後続の処理を実行する
  const fetchRestaurants = useCallback((): void => {
    dispatch({
      type: apiActionConditions.fetching,
      payload: [],
    });
    // axiosの戻り値はPromiseオブジェクト、then()の戻り値もPromiseオブジェクト
    axios
      .get<Restaurant[]>(`${restaurants}`)
      .then((res: AxiosResponse<Restaurant[]>) => {
        const { data } = res;
        dispatch({
          type: apiActionConditions.fetch_success,
          payload: data,
        });
      })
      .catch((error: AxiosError<string>) => {
        console.log(error);
      });
  }, []);
  return { fetchRestaurants, restaurantsData };
};
