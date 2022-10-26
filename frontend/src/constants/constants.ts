// API通信の状態を表す
export const REQUEST_STATE = {
  initial: "initial",
  loading: "loading",
  ok: "ok",
};

export const HTTP_STATUS_CODE: {
  not_acceptable: number;
  ok: number;
  no_content: number;
  created: number;
  internal_server_error: number;
} = {
  not_acceptable: 406,
  ok: 200,
  created: 201,
  no_content: 204,
  internal_server_error: 500,
};

// useReducerの処理でrestaurants情報、foods情報を取得する際の分岐を定義（actionのタイプ）
// reducers/restaurants.tsとreducers/foods、reducers/lineFoodsで使用
export const REDUCER_FETCHING_ACTION = {
  fetching: "fetching",
  fetch_success: "fetch_success",
};

// useReducerで注文データ情報を登録する際の分岐を定義
// reducers/lineFoodsで使用
export const REDUCER_POSTING_ACTION = {
  posting: "posting",
  post_success: "post_success",
};
