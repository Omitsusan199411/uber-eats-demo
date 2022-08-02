// ライブラリ import
import { useCallback, useReducer } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

// コンポーネント import
import { lineFoodsReducer } from "../../reducers/lineFoods";

// 型 import
import { LineFood, LineFoodsStateType } from "../../types/api/LineFood";

// URL import
import { lineFoods } from "../../urls/urlApi";

// 定数 import
import {
  REQUEST_STATE,
  REDUCER_FETCHING_ACTION,
} from "../../constants/constants";

export const useAuthLineFoodsGet = () => {
  const initialLineFoodsState: LineFoodsStateType = {
    fetchStatus: REQUEST_STATE.initial,
    lineFoodsList: [],
  };
  const [lineFoodsData, dispatch] = useReducer(
    lineFoodsReducer,
    initialLineFoodsState
  );

  const lineFoodsGet = useCallback((): void => {
    dispatch({ type: REDUCER_FETCHING_ACTION.fetching, payload: [] });
    axios
      .get<LineFood[]>(`${lineFoods}`)
      .then((res: AxiosResponse<LineFood[]>) => {
        console.log(res.data);
        const { data } = res;
        dispatch({
          type: REDUCER_FETCHING_ACTION.fetch_success,
          payload: data,
        });
        console.log(lineFoodsData);
      })
      .catch((error) => {
        try {
          console.log(error);
          throw new Error(error);
        } catch (error) {
          console.error;
        }
      });
  }, []);
  return { lineFoodsGet, lineFoodsData };
};
