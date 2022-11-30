// ライブラリ import
import { Dispatch, SetStateAction } from 'react';

// 型 import
import { LineFoodsList } from './LineFood';

// api restaurants ReducerAction型定義
export type OrderReducerActionType = {
  type: string;
};

// 注文確定画面のモーダルに渡すPropsを定義
export type OrderModalProps = {
  lineFoodsList: LineFoodsList;
  ordersPost: (ids: number[]) => void;
  orderModalFlagState: boolean;
  setOrderModalFlagState: Dispatch<SetStateAction<boolean>>;
};

// DialogContentText内に展開する配列
export type OrdersDialogContentArray = {
  id: number;
  title: string;
  content: string;
};

// 商品注文確定ボタンの型定義
export type OrderButtonProps = {
  lineFoodIds: number[];
  ordersPost: (ids: number[]) => void;
};

export type OrderCancelButtonProps = {
  orderModalFlagState: boolean;
  setOrderModalFlagState: Dispatch<SetStateAction<boolean>>;
};
