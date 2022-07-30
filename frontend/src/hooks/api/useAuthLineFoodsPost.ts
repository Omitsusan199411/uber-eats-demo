// ライブラリ import
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosError } from "axios";

// コンポーネント import

// 型 import
import {
  Food,
  FoodPostRequest,
  FoodsPostErrorResponse,
} from "../../types/api/Food";
import { EmptyObject } from "../../types/object/EmptyObject";
import { LineFood } from "../../types/api/LineFood";

// URL import
import { lineFoods } from "../../urls/urlApi";

export const useAuthLineFoodsPost = () => {
  // React hooksは
  const history = useHistory();
  const lineFoodsPost = useCallback(
    (selectedFoodInfo: Food | EmptyObject, selectedFoodCount: number): void => {
      const params: FoodPostRequest = {
        food_id: selectedFoodInfo.id,
        count: selectedFoodCount,
      };
      axios
        .post<LineFood>(`${lineFoods}`, params)
        .then((res) => {
          console.log(res.data);
          history.push("/orders");
        })
        .catch((error: AxiosError<FoodsPostErrorResponse>) => {
          throw error;
        });
    },
    []
  );
  return { lineFoodsPost };
};
