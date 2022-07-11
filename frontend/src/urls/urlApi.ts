// APIへのリスエスと先を定義

const DEFALUT_API_URL = "http://localhost:3000/api/v1";

//  api/v1/restaurants
export const restaurants = `${DEFALUT_API_URL}/restaurants`;

// api/v1/foods#index
export const foodsIndex = (restaurant_id: string) =>
  `${DEFALUT_API_URL}/restaurants/${restaurant_id}/foods`;

// api/v1/line_foods
export const lineFoods = `${DEFALUT_API_URL}/line_foods`;

// api/v1/line_foods#replace
export const lineFoodsReplace = `${DEFALUT_API_URL}/line_foods/replace`;

// api/v1/orders
export const orders = `${DEFALUT_API_URL}/orders`;
