// ライブラリ import
import { useCallback, Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosError } from "axios";

// コンポーネント import

// 型 import
import { FoodModal, FoodPostRequest } from "../../types/api/Food";
import { LineFood } from "../../types/api/LineFood";

// URL import
import { lineFoods } from "../../urls/urlApi";

// 定数 import
import { HTTP_STATUS_CODE } from "../../constants/constants";

export const useAuthLineFoodsPost = () => {
  // React hooksは
  const history = useHistory();
  const lineFoodsPost = useCallback(
    (
      FoodModalState: FoodModal,
      setFoodModalState: Dispatch<SetStateAction<FoodModal>>,
      selectedFoodCount: number
    ): void => {
      const params: FoodPostRequest = {
        food_id: FoodModalState.selectedFood.id,
        count: selectedFoodCount,
      };
      axios
        .post<LineFood>(`${lineFoods}`, params)
        .then((res) => {
          console.log(res.data);
          history.push("/orders");
        })
        .catch((error) => {
          // replace用の処理 setNewFoodReplaceStateを実行しreplace用のモーダルを開く
          if (error.response.status === HTTP_STATUS_CODE.not_acceptable) {
            console.log(error);
            console.log(error.response);
            setFoodModalState({
              isFoodModalOpen: false,
              isFoodReplaceModalOpen: true,
              selectedFood: {},
              initialFoodCount: 1,
              existingRestaurant: "",
              newRestaurant: "",
            });
            history.push("/orders");
          } else {
            throw error;
          }
        });
    },
    []
  );
  return { lineFoodsPost };
};
