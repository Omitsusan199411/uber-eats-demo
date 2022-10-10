// ライブラリ import
import { Dispatch, SetStateAction } from "react";

// 型 import
import { LineFoodsList } from "./LineFood";

// api restaurants ReducerAction型定義
export type OrderReducerActionType = {
  type: string;
};

// 注文確定画面のモーダルに渡すPropsを定義
export type OrderModalProps = {
  lineFoodsList: LineFoodsList;
  postStatus: string;
  ordersPost: (ids: number[]) => void;
  orderModalFlagState: boolean;
  setOrderModalFlagState: Dispatch<SetStateAction<boolean>>;
};

// 商品注文確定ボタンの型定義
export type OrderButtonProps = {
  lineFoodIds: number[];
  postStatus: string;
  ordersPost: (ids: number[]) => void;
};

export type OrderCancelButtonProps = {
  orderModalFlagState: boolean;
  setOrderModalFlagState: Dispatch<SetStateAction<boolean>>;
};
