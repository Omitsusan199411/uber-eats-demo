// ライブラリ import
import { memo, VFC, useContext } from "react";
import Box from "@mui/material/Box";
// コンポーネント import
import { CountUpButton } from "../../atoms/buttons/foods/CountUpButton";
import { CountDownButton } from "../../atoms/buttons/foods/CountDownButton";

// 型 import
import { FoodCountFormProps } from "../../../types/api/Food";

// createContext import
import { FoodModalContext } from "../../pages/FoodsAsOneRestaurant";

export const FoodCountForm: VFC<FoodCountFormProps> = memo((props) => {
  const { CountUp, CountDown } = props;
  const { FoodModalState } = useContext(FoodModalContext);

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
