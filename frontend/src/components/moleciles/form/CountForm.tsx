// ライブラリ import
import { memo, VFC, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";

// コンポーネント import
import { CountUpButton } from "../../atoms/buttons/CountUpButton";
import { CountDownButton } from "../../atoms/buttons/CountDownButton";

// 型定義
type Count = {
  selectedFoodCount: number;
  setSelectedFoodCount: Dispatch<SetStateAction<number>>;
};

export const CountForm: VFC<Count> = memo((props) => {
  const { selectedFoodCount, setSelectedFoodCount } = props;

  // 注文数量の変更
  const CountUp = (): void => {
    setSelectedFoodCount(selectedFoodCount + 1);
  };
  const CountDown = (): void => {
    setSelectedFoodCount(selectedFoodCount - 1);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CountUpButton CountUp={CountUp} />
      <Box color="info" component="span" sx={{ textAlign: "center" }}>
        {selectedFoodCount}
      </Box>
      {selectedFoodCount === 1 ? (
        <CountDownButton CountDown={CountDown} isDisabled={true} />
      ) : (
        <CountDownButton CountDown={CountDown} isDisabled={false} />
      )}
    </Box>
  );
});
