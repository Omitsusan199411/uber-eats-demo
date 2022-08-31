// ライブラリ import
import { memo, VFC, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

// コンポーネント import
import { OrderButton } from "../../atoms/buttons/OrderButton";
import { useAuthOrdersPost } from "../../../hooks/api/useAuthOrdersPost";

// 型 import
import { Restaurant } from "../../../types/api/Restaurant";
import { LineFoodsList } from "../../../types/api/LineFood";

type OrderModalProps = {
  lineFoodsList: LineFoodsList;
  orderModalFlagState: boolean;
  setOrderModalFlagState: Dispatch<SetStateAction<boolean>>;
};

// Orders.tsxからpropsをもらう。propsの中身はModalのon,offのbooleanとlineFoodsDataの中身をstateとしてもらう
export const OrderDetailModal: VFC<OrderModalProps> = memo((props) => {
  const { lineFoodsList, orderModalFlagState, setOrderModalFlagState } = props;
  const { restaurant, count, amount } = lineFoodsList;
  return (
    <>
      <Dialog
        open={orderModalFlagState}
        onClose={() => {
          setOrderModalFlagState(!orderModalFlagState);
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
            <Box>{`¥${restaurant.fee + amount}円`}</Box>
          </Box>
          {/* OrderButtonの押下をトリガーにorderPostを発火 PropsとしてordersPostを渡す*/}
          <OrderButton />
        </DialogContent>
      </Dialog>
    </>
  );
});
