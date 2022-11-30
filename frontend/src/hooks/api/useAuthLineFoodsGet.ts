// ライブラリ import
import { useCallback, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

// コンポーネント import
import { lineFoodsReducer } from '../../reducers/lineFoods';

// 型 import
import { LineFoodsStateType, LineFoodsList } from '../../types/api/LineFood';

// URL import
import { lineFoods } from '../../urls/urlApi';

// 定数 import
import { REQUEST_STATE, REDUCER_FETCHING_ACTION, HTTP_STATUS_CODE } from '../../constants/constants';

export const useAuthLineFoodsGet = () => {
  const initialLineFoodsGetState: LineFoodsStateType = {
    fetchStatus: REQUEST_STATE.INITIAL,
    lineFoodsList: {} as LineFoodsList
  };
  const [lineFoodsGetData, lineFoodsDispatch] = useReducer(lineFoodsReducer, initialLineFoodsGetState);

  const history = useHistory();

  const lineFoodsGet = useCallback((): void => {
    lineFoodsDispatch({
      type: REDUCER_FETCHING_ACTION.FETCHING,
      payload: {} as LineFoodsList
    });
    axios
      .get<LineFoodsList>(`${lineFoods}`)
      .then((res: AxiosResponse<LineFoodsList>) => {
        const { data } = res;
        if (res.status === HTTP_STATUS_CODE.OK) {
          lineFoodsDispatch({
            type: REDUCER_FETCHING_ACTION.FETCH_SUCCESS,
            payload: data
          });
        } else {
          history.push('/orders/page204');
        }
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
        history.push('/page500');
      });
  }, []);
  return { lineFoodsGet, lineFoodsGetData };
};
