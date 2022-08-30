// ライブラリ import
import { memo, VFC, useContext } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

// コンポーネント import
import { OrderButton } from "../../atoms/buttons/OrderButton";
import { useAuthOrdersPost } from "../../../hooks/api/useAuthOrdersPost";

// createContext import
import { OrderModalContext } from "../../pages/Orders";

// 型 import
import { Restaurant } from "../../../types/api/Restaurant";

// Orders.tsxからpropsをもらう。propsの中身はModalのon,offのbooleanとlineFoodsDataの中身をstateとしてもらう
export const OrderDetailModal: VFC = memo((props) => {
  // const { ordersPost } = useAuthOrdersPost();
  const { OrderModalState, setOrderModalState } = useContext(OrderModalContext);
  const { line_food_ids, restaurant, count, amount, isOrdersModalOpen } =
    OrderModalState;
  console.log(line_food_ids);
  return (
    <>
      <Dialog
        open={isOrdersModalOpen}
        onClose={() => {
          setOrderModalState({
            line_food_ids: [],
            restaurant: {} as Restaurant,
            count: 0,
            amount: 0,
            isOrdersModalOpen: false,
          });
        }}
      >
        <DialogContent>
          <Box>{restaurant.name}</Box>
          <Box>10分で到着</Box>
          <Box>
            <Box>商品数</Box>
            <Box>{count}</Box>
          </Box>
          <Box>
            <Box>商品価格</Box>
            <Box>{`¥${amount}円`}</Box>
          </Box>
          <Box>
            <Box>配送料</Box>
            <Box>{`¥${restaurant.fee}円`}</Box>
          </Box>
          <Box>
            <Box>合計</Box>
            <Box>{`¥${restaurant.fee + amount}`}</Box>
          </Box>
          {/* OrderButtonの押下をトリガーにorderPostを発火 PropsとしてordersPostを渡す*/}
          <OrderButton />
        </DialogContent>
      </Dialog>
    </>
  );
});
