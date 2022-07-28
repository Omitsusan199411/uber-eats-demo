// 型import
import { Food } from "../api/Foods";
import { EmptyObject } from "../object/EmptyObject";

export type FoodModal = {
  isOpen: boolean;
  selectedFood: Food | EmptyObject;
  initialFoodCount: number;
};
