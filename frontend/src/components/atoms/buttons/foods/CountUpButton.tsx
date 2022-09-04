// ライブラリ import
import { memo, VFC } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// コンポーネント import
import { CustomBasicIconButton } from "../BasicIconButton";

type CountUpProps = {
  CountUp: () => void;
};

export const CountUpButton: VFC<CountUpProps> = memo((props) => {
  const { CountUp } = props;
  return (
    <CustomBasicIconButton onClick={CountUp} sx={{ p: "15px" }}>
      <AddCircleIcon fontSize="large" sx={{ color: "#aaaaaa" }} />
    </CustomBasicIconButton>
  );
});
