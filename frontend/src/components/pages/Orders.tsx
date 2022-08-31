// ライブラリ import
import {
  VFC,
  memo,
  useEffect,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import Box from "@mui/material/Box";

// コンポーネント import
import { useAuthLineFoodsGet } from "../../hooks/api/useAuthLineFoodsGet";
import { OrderDetailModal } from "../organisms/orders/OrderDetailModal";

export const Orders: VFC = memo(() => {
  const { lineFoodsGet, lineFoodsGetData } = useAuthLineFoodsGet();

  const [OrderModalFlagState, setOrderModalFlagState] =
    useState<boolean>(false);

  // カスタムフックの呼び出し
  // useEffectは第二引数に空の配列を指定すると初回のレンダリング後に実行される。第二引数を設定すると、設定した値が変更されたタイミングで実行される（デフォルト）
  // OrderModalStateの値は次回のレンダリングの前に反映されるようになっている（デフォルト）
  useEffect(() => {
    lineFoodsGet();
    setOrderModalFlagState(!OrderModalFlagState);
  }, []);

  console.log(lineFoodsGetData);
  console.log(OrderModalFlagState);

  return (
    <>
      {lineFoodsGetData.fetchStatus === "ok" ? (
        <OrderDetailModal
          lineFoodsList={lineFoodsGetData.lineFoodsList}
          orderModalFlagState={OrderModalFlagState}
          setOrderModalFlagState={setOrderModalFlagState}
        />
      ) : (
        <Box>ロード中</Box>
      )}
    </>
  );
});
