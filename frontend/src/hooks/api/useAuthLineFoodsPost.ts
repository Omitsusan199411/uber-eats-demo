// ライブラリ import
import { useCallback, Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// 型 import
import { FoodModal, FoodPostRequest } from "../../types/api/Food";
import { LineFood } from "../../types/api/LineFood";

// URL import
import { lineFoods } from "../../urls/urlApi";

// 定数 import
import { HTTP_STATUS_CODE } from "../../constants/constants";

export const useAuthLineFoodsPost = () => {
  // React hooksはトップレベルで定義する
  const history = useHistory();
  const lineFoodsPost = useCallback(
    (
      FoodModalState: FoodModal,
      setFoodModalState: Dispatch<SetStateAction<FoodModal>>
    ): void => {
      const params: FoodPostRequest = {
        food_id: FoodModalState.selectedFood.id,
        count: FoodModalState.selectedFoodCount,
      };
      axios
        .post<LineFood>(`${lineFoods}`, params)
        .then((res) => {
          history.push("/orders");
        })
        // 業務設計上のエラーを想定（ユーザー責任）
        .catch((error) => {
          // replace用の処理 setNewFoodReplaceStateを実行しreplace用のモーダルを開く
          if (error.response?.status === HTTP_STATUS_CODE.not_acceptable) {
            setFoodModalState({
              ...FoodModalState,
              isFoodModalOpen: false,
              isFoodReplaceModalOpen: true,
              existingRestaurant: error.response.data.existing_restaurant,
              newRestaurant: error.response.data.new_restaurant,
            });
            throw new Error(error);
          } // システムエラーを想定（開発者責任）
          else {
            console.log(error);
            history.push("/page500");
            throw new Error(error);
          }
        });
    },
    []
  );
  return { lineFoodsPost };
};
