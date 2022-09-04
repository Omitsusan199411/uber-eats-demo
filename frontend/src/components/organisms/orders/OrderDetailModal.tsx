// ライブラリ import
import { memo, VFC, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import styled from "styled-components";

// コンポーネント import
import { OrderButton } from "../../atoms/buttons/orders/OrderButton";
import { useAuthOrdersPost } from "../../../hooks/api/useAuthOrdersPost";
import { MaterialUiTheme } from "../../../theme/MaterialUiTheme";

// 型 import
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
        sx={{ overflowWrap: "break-word" }}
      >
        <DialogContent
          sx={{
            maxWidth: { xs: "300px", sm: "400px" },
            width: "100vw",
            pl: "40px",
            pr: "40px",
          }}
        >
          <OrderDialogBox>
            <OrderDialogContentText>購入店舗</OrderDialogContentText>
            <OrderDialogContentText>{restaurant.name}</OrderDialogContentText>
          </OrderDialogBox>
          <OrderDialogBox>
            <OrderDialogContentText>商品数</OrderDialogContentText>
            <OrderDialogContentText>{`${count.toLocaleString()}個`}</OrderDialogContentText>
          </OrderDialogBox>
          <OrderDialogBox>
            <OrderDialogContentText>商品価格</OrderDialogContentText>
            <OrderDialogContentText>{`¥${amount.toLocaleString()}円`}</OrderDialogContentText>
          </OrderDialogBox>
          <OrderDialogBox>
            <OrderDialogContentText>配送料</OrderDialogContentText>
            <OrderDialogContentText>{`¥${restaurant.fee.toLocaleString()}円`}</OrderDialogContentText>
          </OrderDialogBox>
          <OrderDialogBox>
            <OrderDialogContentText
              sx={{ fontWeight: 900, textDecoration: "underline" }}
            >
              合計
            </OrderDialogContentText>
            <OrderDialogContentText
              sx={{ fontWeight: 900, textDecoration: "underline" }}
            >{`¥${(
              restaurant.fee + amount
            ).toLocaleString()}円`}</OrderDialogContentText>
          </OrderDialogBox>
          <DialogContentText sx={{ mt: "15px", fontSize: "14px" }}>
            ※ 到着時間は10分を予定しています。
          </DialogContentText>
          {/* OrderButtonの押下をトリガーにorderPostを発火 PropsとしてordersPostを渡す*/}
          <DialogActions
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <OrderButton />
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
});

const OrderDialogBox = styled(Box)`
  @media (min-width: ${MaterialUiTheme.breakpoints.values.xs}px) {
    display: flex;
    justify-content: space-between;
  }
`;

const OrderDialogContentText = styled(DialogContentText)`
  margin-top: 15px;
  color: ${MaterialUiTheme.palette.basis.main};
`;
