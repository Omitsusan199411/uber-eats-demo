// API通信の状態を表す
export const REQUEST_STATE = {
  initial: "initial",
  loading: "loading",
  ok: "ok",
};

export const HTTP_STATUS_CODE: { not_acceptable: number } = {
  not_acceptable: 406,
};

// useReducerの処理でrestaurants情報、foods情報を取得する際の分岐を定義（actionのタイプ）
// reducers/restaurants.tsとreducers/foodsで使用
export const REDUCER_FETCHING_ACTION = {
  fetching: "fetching",
  fetch_success: "fetch_success",
};
