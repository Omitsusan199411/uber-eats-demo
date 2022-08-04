// ライブラリ import
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// 型 import
import { FoodModal } from "../../types/api/Food";

// URL import
import { lineFoodsReplace } from "../../urls/urlApi";

export const useAuthLineFoodsPut = () => {
  const history = useHistory();
  const lineFoodsPut = useCallback((FoodModalState: FoodModal): void => {
    const params = {
      food_id: FoodModalState.selectedFood.id,
      count: FoodModalState.selectedFoodCount,
    };
    axios
      .put(lineFoodsReplace, params)
      .then(() => {
        history.push("/orders");
      })
      .catch((error) => {
        try {
          throw new Error(error);
        } catch (error) {
          console.log(error);
        }
      });
  }, []);
  return { lineFoodsPut };
};