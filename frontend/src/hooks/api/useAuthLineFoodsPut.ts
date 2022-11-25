// ライブラリ import
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// 型 import
import { FoodModal } from '../../types/api/Food';

// URL import
import { lineFoodsReplace } from '../../urls/urlApi';

export const useAuthLineFoodsPut = () => {
  const history = useHistory();
  const lineFoodsPut = useCallback((FoodModalState: FoodModal): void => {
    const params = {
      food_id: FoodModalState.selectedFood.id,
      count: FoodModalState.selectedFoodCount
    };
    axios
      .put(lineFoodsReplace, params)
      // HTTPレスポンスが200番台（正常）の場合は、then()の処理へ
      .then(() => {
        history.push('/orders');
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
        history.push('/page500');
      });
  }, []);
  return { lineFoodsPut };
};
