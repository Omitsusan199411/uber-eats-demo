// ライブラリ import
import { useCallback, useReducer } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

// コンポーネント import
import { lineFoodsReducer } from "../../reducers/lineFoods";

// 型 import
import { LineFoodsStateType, LineFoodsList } from "../../types/api/LineFood";

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
    lineFoodsList: null,
  };
  const [lineFoodsData, dispatch] = useReducer(
    lineFoodsReducer,
    initialLineFoodsState
  );

  const lineFoodsGet = useCallback((): void => {
    dispatch({ type: REDUCER_FETCHING_ACTION.fetching, payload: null });
    axios
      .get<LineFoodsList>(`${lineFoods}`)
      .then((res: AxiosResponse<LineFoodsList>) => {
        const { data } = res;
        dispatch({
          type: REDUCER_FETCHING_ACTION.fetch_success,
          payload: data,
        });
      })
      .catch((error) => {
        try {
          throw new Error(error);
        } catch (error) {
          console.log(error);
        }
      });
  }, []);
  return { lineFoodsGet, lineFoodsData };
};
