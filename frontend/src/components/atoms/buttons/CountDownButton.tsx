// ライブラリ import
import { memo, VFC } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

// ライブラリ import
import { CustomIconButton } from "./CountUpButton";

export const CountDownButton: VFC = memo(() => {
  return (
    <CustomIconButton>
      <RemoveCircleIcon fontSize="large" sx={{ color: "#aaaaaa" }} />
    </CustomIconButton>
  );
});
