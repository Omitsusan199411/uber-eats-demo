// 型import
import { Food } from "../api/Foods";

export type FoodModal = {
  isOpen: boolean;
  selectedFood: Food | null;
  selectedFoodCount: number;
};
