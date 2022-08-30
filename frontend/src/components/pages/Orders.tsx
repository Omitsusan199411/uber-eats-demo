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

// 型 import
import { isOrdersModalOpenFlag } from "../../types/api/Order";
import { LineFoodsList } from "../../types/api/LineFood";

export const OrderModalContext = createContext(
  {} as {
    OrderModalState: LineFoodsList & isOrdersModalOpenFlag;
    setOrderModalState: Dispatch<
      SetStateAction<LineFoodsList & isOrdersModalOpenFlag>
    >;
  }
);

export const Orders: VFC = memo(() => {
  const { lineFoodsGet, lineFoodsGetData } = useAuthLineFoodsGet();
  const initialOrderModalState: LineFoodsList & isOrdersModalOpenFlag = {
    line_food_ids: [],
    restaurant: {} as {
      id: number;
      name: string;
      fee: number;
      time_required: number;
    },
    count: 0,
    amount: 0,
    isOrdersModalOpen: false,
  };
  const [OrderModalState, setOrderModalState] = useState<
    LineFoodsList & isOrdersModalOpenFlag
  >(initialOrderModalState);

  // カスタムフックの呼び出し
  useEffect(() => {
    lineFoodsGet();
    setOrderModalState({
      line_food_ids: lineFoodsGetData.lineFoodsList.line_food_ids,
      restaurant: lineFoodsGetData.lineFoodsList.restaurant,
      count: lineFoodsGetData.lineFoodsList.count,
      amount: lineFoodsGetData.lineFoodsList.amount,
      isOrdersModalOpen: true,
    });
  }, []);
  return (
    <>
      <OrderModalContext.Provider
        value={{ OrderModalState, setOrderModalState }}
      >
        {lineFoodsGetData.fetchStatus === "ok" ? (
          <OrderDetailModal />
        ) : (
          <Box>ロード中</Box>
        )}
      </OrderModalContext.Provider>
    </>
  );
});
