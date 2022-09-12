// ライブラリ import
import { ReactNode, Dispatch, SetStateAction } from "react";

export type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
};

export type OrderButtonProps = {
  lineFoodIds: number[];
  postStatus: string;
  ordersPost: (ids: number[]) => void;
};
