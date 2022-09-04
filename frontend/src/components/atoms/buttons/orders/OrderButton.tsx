// ライブラリ import
import { VFC, memo } from "react";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント import
import { CustomBasicButton } from "../BasicButton";

export const OrderButton: VFC = memo(() => {
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
    >
      注文の確定
    </CustomBasicButton>
  );
});
