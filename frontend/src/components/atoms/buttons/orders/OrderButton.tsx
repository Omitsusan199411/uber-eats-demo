// ライブラリ import
import { VFC, memo } from "react";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント import
import { CustomBasicButton } from "../BasicButton";
import { useAuthOrdersPost } from "../../../../hooks/api/useAuthOrdersPost";

// 型 import
import { OrderButtonProps } from "../../../../types/button/ButtonProps";

export const OrderButton: VFC<OrderButtonProps> = memo((props) => {
  const { ordersPost } = useAuthOrdersPost();
  const { lineFoodIds, children } = props;
  return (
    <CustomBasicButton
      variant="contained"
      color="basis"
      startIcon={<SendIcon />}
      sx={{
        color: "primary.main",
        width: { xs: "90%", md: "100%" },
        p: "8px",
        pl: "15px",
        pr: "20px",
        mt: "20px",
      }}
      // onClickは関数型でないといけない。void型ではいけない。関数()の場合実行結果が返ってくるので注意
      onClick={() => {
        ordersPost(lineFoodIds);
      }}
    >
      {children}
    </CustomBasicButton>
  );
});
