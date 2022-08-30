// ライブラリ import
import { memo, VFC, useContext } from "react";
import Box from "@mui/material/Box";
// コンポーネント import
import { CountUpButton } from "../../atoms/buttons/CountUpButton";
import { CountDownButton } from "../../atoms/buttons/CountDownButton";

// createContext import
import { FoodModalContext } from "../../pages/Foods";

export const CountForm: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  // 注文数量の変更
  // イベントオブジェクトは呼び出される関数内で使用しないので、イベントの型定義は不要になる。
  const CountUp = (): void => {
    setFoodModalState({
      ...FoodModalState,
      selectedFoodCount: FoodModalState.selectedFoodCount + 1,
    });
  };
  const CountDown = (): void => {
    setFoodModalState({
      ...FoodModalState,
      selectedFoodCount: FoodModalState.selectedFoodCount - 1,
    });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CountUpButton CountUp={CountUp} />
      <Box color="info" component="span" sx={{ textAlign: "center" }}>
        {FoodModalState.selectedFoodCount}
      </Box>
      {FoodModalState.selectedFoodCount === 1 ? (
        <CountDownButton CountDown={CountDown} isDisabled={true} />
      ) : (
        <CountDownButton CountDown={CountDown} isDisabled={false} />
      )}
    </Box>
  );
});
