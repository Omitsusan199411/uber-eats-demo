// ライブラリimport
import axios, { AxiosResponse } from 'axios';
import { useCallback, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

// コンポーネントimport
import { restaurants } from '../../urls/urlApi';
import { restaurantsReducer } from '../../reducers/restaurants';

// 型import
import { Restaurant, RestaurantsStateType } from '../../types/api/Restaurant';

// 定数import
import { REQUEST_STATE, REDUCER_FETCHING_ACTION } from '../../constants/constants';

export const useAuthRestaurants = () => {
  const restaurantsInitialState: RestaurantsStateType = {
    fetchStatus: REQUEST_STATE.INITIAL,
    restaurantsList: []
  };
  const [restaurantsData, dispatch] = useReducer(restaurantsReducer, restaurantsInitialState);

  const history = useHistory();

  // awaitで結果を待ってから後続の処理を実行する
  const fetchRestaurants = useCallback((): void => {
    dispatch({
      type: REDUCER_FETCHING_ACTION.FETCHING,
      payload: []
    });
    // axiosの戻り値はPromiseオブジェクト、then()の戻り値もPromiseオブジェクト
    axios
      .get<Restaurant[]>(`${restaurants}`, { withCredentials: true })
      .then((res: AxiosResponse<Restaurant[]>) => {
        const { data } = res;
        dispatch({
          type: REDUCER_FETCHING_ACTION.FETCH_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
        history.push('/page500');
      });
  }, []);
  return { fetchRestaurants, restaurantsData };
};
