// ライブラリimport
import axios, { AxiosResponse } from "axios";
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

  const fetchRestaurants = useCallback(() => {
    dispatch({
      type: apiActionConditions.fetching,
      payload: [],
    });
    axios
      .get<Restaurant[]>(`${restaurants}`)
      .then((res: AxiosResponse<Restaurant[]>) => {
        const { data } = res;
        dispatch({
          type: apiActionConditions.fetch_success,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { fetchRestaurants, restaurantsData };
};
