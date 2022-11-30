// API通信の状態を表す
export const REQUEST_STATE = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  OK: 'OK'
};

export const HTTP_STATUS_CODE: {
  NOT_ACCEPTABLE: number;
  OK: number;
  NOT_CONTENT: number;
  CREATED: number;
  INITIAL_SERVER_ERROR: number;
} = {
  NOT_ACCEPTABLE: 406,
  OK: 200,
  CREATED: 201,
  NOT_CONTENT: 204,
  INITIAL_SERVER_ERROR: 500
};

// useReducerの処理でrestaurants情報、foods情報を取得する際の分岐を定義（actionのタイプ）
// reducers/restaurants.tsとreducers/foods、reducers/lineFoodsで使用
export const REDUCER_FETCHING_ACTION = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
};

// useReducerで注文データ情報を登録する際の分岐を定義
// reducers/lineFoodsで使用
export const REDUCER_POSTING_ACTION = {
  POSTING: 'POSTING',
  POST_SUCCESS: 'POST_SUCCESS'
};

// Drawerの幅を定数で定義
export const DRAWER_WIDTH = '260px';
