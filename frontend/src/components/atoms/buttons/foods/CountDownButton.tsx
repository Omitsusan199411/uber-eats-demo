// ライブラリ import
import { memo, VFC } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

// ライブラリ import
import { CustomBasicIconButton } from "../BasicIconButton";

// 型定義
type CountDownProps = {
  CountDown: () => void;
  isDisabled: boolean;
};

export const CountDownButton: VFC<CountDownProps> = memo((props) => {
  const { CountDown, isDisabled } = props;
  return (
    <CustomBasicIconButton
      onClick={CountDown}
      disabled={isDisabled}
      sx={{ p: "15px" }}
    >
      <RemoveCircleIcon fontSize="large" sx={{ color: "#aaaaaa" }} />
    </CustomBasicIconButton>
  );
});