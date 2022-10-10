// ライブラリ import
import { VFC, memo } from "react";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// コンポーネント import
import { BasicButton } from "../BasicButton";

// 型 import
import { OrderButtonProps } from "../../../../types/api/Order";

// 定義 import
import { REQUEST_STATE } from "../../../../constants/constants";

const ordersPostFlagFunction = (postStatus: string) => {
  switch (postStatus) {
    case REQUEST_STATE.loading:
      return <CircularProgress color="primary" thickness={3.5} size={30} />;
    default:
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <SendIcon sx={{ mr: "20px", fontSize: { xs: "16px", sm: "20px" } }} /> */}
          <Box>注文を確定</Box>
        </Box>
      );
  }
};

export const OrderButton: VFC<OrderButtonProps> = memo((props) => {
  const { lineFoodIds, postStatus, ordersPost } = props;
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
      {ordersPostFlagFunction(postStatus)}
    </BasicButton>
  );
});
