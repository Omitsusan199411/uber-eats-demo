// ライブラリ import
import { memo, VFC, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// コンポーネント import
import { CountUpButton } from "../../atoms/buttons/CountUpButton";
import { CountDownButton } from "../../atoms/buttons/CountDownButton";

export const CountForm: VFC<{ initialFoodCount: number }> = memo((props) => {
  const { initialFoodCount } = props;
  const [selectedFoodCount, setSelectedFoodCount] =
    useState<number>(initialFoodCount);
  const CountUp = (): void => {
    setSelectedFoodCount(selectedFoodCount + 1);
  };
  const CountDown = (): void => {
    setSelectedFoodCount(selectedFoodCount - 1);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={CountUp}>
        <CountUpButton />
      </IconButton>
      <Box color="info" component="span" sx={{ textAlign: "center" }}>
        {selectedFoodCount}
      </Box>
      {selectedFoodCount === 1 ? (
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
