// ライブラリ import
import { memo, VFC } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// コンポーネント import
import { CountUpButton } from "../../atoms/buttons/CountUpButton";
import { CountDownButton } from "../../atoms/buttons/CountDownButton";

type Count = {
  CountUp: () => void;
  CountDown: () => void;
  FoodCount: number;
};

export const CountForm: VFC<Count> = memo((props) => {
  const { CountUp, CountDown, FoodCount } = props;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={CountUp}>
        <CountUpButton />
      </IconButton>
      <Box color="info" component="span" sx={{ textAlign: "center" }}>
        {FoodCount}
      </Box>
      {FoodCount === 1 ? (
        <IconButton color="info" onClick={CountDown} disabled>
          <CountDownButton />
        </IconButton>
      ) : (
        <IconButton color="info" onClick={CountDown}>
          <CountDownButton />
        </IconButton>
      )}
    </Box>
  );
});
