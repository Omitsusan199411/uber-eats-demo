// ライブラリ import
import { memo, VFC, useContext, useCallback } from "react";
import Box from "@mui/material/Box";
// コンポーネント import
import { CountUpButton } from "../../atoms/buttons/foods/CountUpButton";
import { CountDownButton } from "../../atoms/buttons/foods/CountDownButton";

// createContext import
import { FoodModalContext } from "../../pages/Foods";

export const CountForm: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  // 注文数量の変更
  // イベントオブジェクトは呼び出される関数内で使用しないので、イベントの型定義は不要になる。
  // useCallbackで関数の更新(キャッシュを持たせ不変の値とする)に伴うprops（CountUpButton、CountDownButtonコンポーネントへのprops）の更新を防ぎ、不要な再レンダリングを防ぐ。
  // useCallbackの副作用関数をFoodModalStateを設定する必要がある。設定しないと２回目押下以降カウントが増減しない。
  const CountUp = useCallback((): void => {
    setFoodModalState({
      ...FoodModalState,
      selectedFoodCount: FoodModalState.selectedFoodCount + 1,
    });
  }, [FoodModalState]);
  const CountDown = useCallback((): void => {
    setFoodModalState({
      ...FoodModalState,
      selectedFoodCount: FoodModalState.selectedFoodCount - 1,
    });
  }, [FoodModalState]);

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
