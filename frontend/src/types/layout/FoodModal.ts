// 型import
import { Food } from "../api/Food";
import { EmptyObject } from "../object/EmptyObject";

export type FoodModal = {
  isOpen: boolean;
  selectedFood: Food | EmptyObject;
  initialFoodCount: number;
};
