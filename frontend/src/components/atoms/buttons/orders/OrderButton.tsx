// ライブラリ import
import { VFC, memo } from "react";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";

// コンポーネント import
import { BasicButton } from "../BasicButton";

// 型 import
import { OrderButtonProps } from "../../../../types/api/Order";

export const OrderButton: VFC<OrderButtonProps> = memo((props) => {
  const { lineFoodIds, ordersPost } = props;
  return (
    <BasicButton
      variant="contained"
      color="basis"
      startIcon={<SendIcon sx={{ mr: "4px" }} />}
      sx={{
        color: "primary.main",
        width: "100%",
        mt: "10px",
        ml: { xs: "0px", sm: "15px" },
      }}
      // onClickは関数型でないといけない。void型ではいけない。関数()の場合実行結果が返ってくるので注意
      onClick={() => {
        ordersPost(lineFoodIds);
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>注文を確定</Box>
      </Box>
    </BasicButton>
  );
});
