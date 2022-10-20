// ライブラリ import
import {
  VFC,
  memo,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams } from "react-router-dom";

// コンポーネント import
import { useAuthFoods } from "../../hooks/api/useAuthFoods";
import { FoodDetailModal } from "../organisms/foods/FoodDetailModal";
import { NewFoodReplaceModal } from "../organisms/foods/NewFoodReplaceModal";
import { FoodsAsOneRestaurantLayout } from "../templates/FoodsAsOneRestaurantLayout";
import { BackdropCircular } from "../organisms/BackdropCircular";

// 型 import
import { FoodModal } from "../../types/api/Food";

// 定数 import
import { REQUEST_STATE } from "../../constants/constants";

// createContext(FoodModalContext)定義(as以下はFoodModalContextの型定義)
// Dispatchはvoidを返す
export const FoodModalContext = createContext(
  {} as {
    FoodModalState: FoodModal;
    setFoodModalState: Dispatch<SetStateAction<FoodModal>>;
  }
);

export const FoodsAsOneRestaurant: VFC = memo(() => {
  // food Modalの初期State
  const FoodModalInitialState: FoodModal = {
    isFoodModalOpen: false,
    isFoodReplaceModalOpen: false,
    selectedFood: {},
    selectedFoodCount: 1,
    existingRestaurant: null,
    newRestaurant: null,
  };
  // food一覧を取得 カスタムフック
  const { fetchFoods, foodsState } = useAuthFoods();
  const { fetchStatus, foodsList } = foodsState;

  // react hooks（useParams）は必ず関数コンポーネント本体のトップレベルで呼び出すこと
  const { restaurant_id } = useParams<{ restaurant_id: string }>();

  // food Modal用のuseState
  const [FoodModalState, setFoodModalState] = useState<FoodModal>(
    FoodModalInitialState
  );
  const { isFoodModalOpen, isFoodReplaceModalOpen } = FoodModalState;

  // food一覧を表示
  useEffect(() => {
    fetchFoods(restaurant_id);
  }, [restaurant_id]);

  return (
    <>
      {fetchStatus === REQUEST_STATE.loading && <BackdropCircular />}
      {fetchStatus === REQUEST_STATE.ok && (
        <>
          <FoodsAsOneRestaurantLayout
            foodsList={foodsList}
            setFoodModalState={setFoodModalState}
          />
          <FoodModalContext.Provider
            value={{ FoodModalState, setFoodModalState }}
          >
            {isFoodModalOpen && <FoodDetailModal />}
            {isFoodReplaceModalOpen && <NewFoodReplaceModal />}
          </FoodModalContext.Provider>
        </>
      )}
    </>
  );
});
