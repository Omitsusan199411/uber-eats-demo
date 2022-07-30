// ライブラリ import
import { memo, VFC } from "react";
import IconButton from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";

// 型 import
import { ButtonProps } from "../../../types/button/ButtonProps";

export const CloseButton: VFC<ButtonProps> = memo((props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: "10%",
        position: "absolute",
        right: "0px",
        color: "#aaaaaa",
      }}
    >
      <CancelIcon fontSize="large" />
    </IconButton>
  );
});
