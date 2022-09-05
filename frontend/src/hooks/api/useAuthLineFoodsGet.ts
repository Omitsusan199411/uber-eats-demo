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
  const initialLineFoodsGetState: LineFoodsStateType = {
    fetchStatus: REQUEST_STATE.initial,
    postStatus: REQUEST_STATE.initial,
    lineFoodsList: {} as LineFoodsList,
  };
  const [lineFoodsGetData, dispatch] = useReducer(
    lineFoodsReducer,
    initialLineFoodsGetState
  );

  const lineFoodsGet = useCallback((): void => {
    dispatch({
      type: REDUCER_FETCHING_ACTION.fetching,
      payload: {} as LineFoodsList,
    });
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
        throw new Error(error);
      });
  }, []);
  return { lineFoodsGet, lineFoodsGetData };
};
