// ライブラリ import
import { createContext, Dispatch, SetStateAction } from 'react';

// 型 import
import { FoodModal } from '../../types/api/Food';

// createContext(FoodModalContext)定義(as以下はFoodModalContextの型定義)
// Dispatchはvoidを返す
export const FoodModalContext = createContext(
  {} as {
    FoodModalState: FoodModal;
    setFoodModalState: Dispatch<SetStateAction<FoodModal>>;
  }
);
