// ライブラリ import
import { VFC, memo, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

// コンポーネント import
import { useAuthFoods } from '../../hooks/api/useAuthFoods';
import { FoodModalContext } from '../../contexts/foods/FoodModalContext';
import { FoodDetailModal } from '../organisms/foods/FoodDetailModal';
import { NewFoodReplaceModal } from '../organisms/foods/NewFoodReplaceModal';
import { FoodsAsOneRestaurantLayout } from '../templates/FoodsAsOneRestaurantLayout';
import { BackdropCircular } from '../organisms/BackdropCircular';

// 型 import
import { FoodModal } from '../../types/api/Food';

// 定数 import
import { REQUEST_STATE } from '../../constants/constants';

export const FoodsAsOneRestaurant: VFC = memo(() => {
  // food Modalの初期State
  const FoodModalInitialState: FoodModal = {
    isFoodModalOpen: false,
    isFoodReplaceModalOpen: false,
    selectedFood: {},
    selectedFoodCount: 1,
    existingRestaurant: '',
    newRestaurant: ''
  };
  // food一覧を取得 カスタムフック
  const { fetchFoods, foodsState } = useAuthFoods();
  const { fetchStatus, foodsList } = foodsState;

  // react hooks（useParams）は必ず関数コンポーネント本体のトップレベルで呼び出すこと
  const { restaurantId } = useParams<{ restaurantId: string }>();

  // food Modal用のuseState
  const [FoodModalState, setFoodModalState] = useState<FoodModal>(FoodModalInitialState);
  // FoodModalStateとsetFoodModalStateをメモ化し、useContextを使うコンポーネントに対して不要なレンダリングを防ぐ。
  const contextValue = useMemo(() => {
    return {
      FoodModalState,
      setFoodModalState
    };
  }, [FoodModalState, setFoodModalState]);

  const { isFoodModalOpen, isFoodReplaceModalOpen } = FoodModalState;

  // Drawerの開閉ステータス
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  // カスタムフック（food一覧を表示）
  useEffect(() => {
    fetchFoods(restaurantId);
  }, []);

  return (
    <>
      {fetchStatus === REQUEST_STATE.LOADING && <BackdropCircular />}
      {fetchStatus === REQUEST_STATE.OK && (
        <>
          <FoodsAsOneRestaurantLayout
            foodsList={foodsList}
            setFoodModalState={setFoodModalState}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
          <FoodModalContext.Provider value={contextValue}>
            {isFoodModalOpen && <FoodDetailModal />}
            {isFoodReplaceModalOpen && <NewFoodReplaceModal />}
          </FoodModalContext.Provider>
        </>
      )}
    </>
  );
});
