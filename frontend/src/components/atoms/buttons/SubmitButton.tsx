// ライブラリ import
import { memo, VFC } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

// 型 import
import { ButtonProps } from "../../../types/button/ButtonProps";

export const SubmitButton: VFC<ButtonProps> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button
      color="info"
      variant="contained"
      startIcon={<SendIcon />}
      sx={{
        width: { xs: "50%", md: "60%" },
        alignItems: "center",
        justifyContent: "space-around",
        p: "8px",
        pl: "20px",
        pr: "20px",
      }}
    >
      {children}
    </Button>
  );
});
