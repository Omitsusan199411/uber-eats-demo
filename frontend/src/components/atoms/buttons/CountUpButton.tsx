// ライブラリ import
import { memo, VFC } from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const CountUpButton: VFC = memo(() => {
  return (
    <IconButton sx={{ color: "#aaaaaa" }}>
      <AddCircleIcon />
    </IconButton>
  );
});
