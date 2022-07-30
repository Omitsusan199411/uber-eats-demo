// ライブラリ import
import { ReactNode } from "react";

// 型 import
import { Food } from "../api/Food";
import { EmptyObject } from "../object/EmptyObject";

export type FoodLineSubmitProps = {
  children: ReactNode;
  selectedFoodInfo: Food | EmptyObject;
  selectedFoodCount: number;
};
