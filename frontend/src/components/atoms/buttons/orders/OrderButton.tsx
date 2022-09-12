// ライブラリ import
import { VFC, memo } from "react";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// コンポーネント import
import { CustomBasicButton } from "../BasicButton";

// 型 import
import { OrderButtonProps } from "../../../../types/button/ButtonProps";

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
          <SendIcon sx={{ mr: "20px" }} />
          <Box>注文を確定する</Box>
        </Box>
      );
  }
};

export const OrderButton: VFC<OrderButtonProps> = memo((props) => {
  const { lineFoodIds, postStatus, ordersPost } = props;
  console.log(postStatus);
  return (
    <CustomBasicButton
      variant="contained"
      color="basis"
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
      {ordersPostFlagFunction(postStatus)}
    </CustomBasicButton>
  );
});
