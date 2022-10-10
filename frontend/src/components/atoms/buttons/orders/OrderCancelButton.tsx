// ライブラリ import
import { VFC, memo } from "react";
import { useHistory } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント import
import { BasicButton } from "../BasicButton";

// 型 import
import { OrderCancelButtonProps } from "../../../../types/api/Order";

export const OrderCancelButton: VFC<OrderCancelButtonProps> = memo((props) => {
  const { orderModalFlagState, setOrderModalFlagState } = props;
  const history = useHistory();
  return (
    <BasicButton
      variant="contained"
      color="primary"
      startIcon={<SendIcon sx={{ mr: "4px" }} />}
      sx={{
        color: "basis.main",
        border: "1px solid",
        width: "100%",
        mt: "10px",
        ml: "8px",
      }}
      onClick={async () => {
        await setOrderModalFlagState(!orderModalFlagState);
        history.push("/restaurants");
      }}
    >
      キャンセル
    </BasicButton>
  );
});
