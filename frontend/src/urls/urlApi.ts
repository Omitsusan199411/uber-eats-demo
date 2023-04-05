// APIへのリスエスと先を定義

const DEFALUT_API_URL = 'http://localhost:3001/api/v1';

//  api/v1/restaurants
export const restaurants = `${DEFALUT_API_URL}/restaurants`;

// api/v1/foods#index
export const foodsIndex = (restaurant_id: string) => `${DEFALUT_API_URL}/restaurants/${restaurant_id}/foods`;

// api/v1/line_foods
export const lineFoods = `${DEFALUT_API_URL}/line_foods`;

// api/v1/line_foods#replace
export const lineFoodsReplace = `${DEFALUT_API_URL}/line_foods/replace`;

// api/v1/orders
export const orders = `${DEFALUT_API_URL}/orders`;

// api/v1/registrations/#sign_uo
export const usersSignUpUrl = `${DEFALUT_API_URL}/sign_up`;

// api/v1/sessions/#sign_in
export const usersSignInUrl = `${DEFALUT_API_URL}/sign_in`;

// api/v1/sessions/sign_out
export const usersSignOutUrl = `${DEFALUT_API_URL}/sign_out`;
