// ライブラリ import
import { memo, VFC } from "react";
import IconButton from "@mui/material/Button";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const CountDownButton: VFC = memo(() => {
  return (
    <IconButton sx={{ color: "#aaaaaa" }}>
      <RemoveCircleIcon />
    </IconButton>
  );
});
