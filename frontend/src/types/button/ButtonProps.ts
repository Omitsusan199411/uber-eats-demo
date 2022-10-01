// 商品注文確定ボタンの型定義
export type OrderButtonProps = {
  lineFoodIds: number[];
  postStatus: string;
  ordersPost: (ids: number[]) => void;
};
