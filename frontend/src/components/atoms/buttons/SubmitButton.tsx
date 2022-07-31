// ライブラリ import
import { memo, VFC, useContext } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント import
import { useAuthLineFoodsPost } from "../../../hooks/api/useAuthLineFoodsPost";

// 型 import
import { FoodLineSubmitProps } from "../../../types/button/FoodLineSubmitProps";

// createContextの定義
import { FoodModalContext } from "../../pages/Foods";

export const SubmitButton: VFC<FoodLineSubmitProps> = memo((props) => {
  const { children, selectedFoodCount } = props;
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);

  // 仮注文(LineFoods) カスタムフック
  const { lineFoodsPost } = useAuthLineFoodsPost();

  return (
    <Button
      color="info"
      variant="contained"
      startIcon={<SendIcon />}
      sx={{
        width: { xs: "50%", md: "60%" },
        alignItems: "center",
        justifyContent: "space-around",
        p: "8px",
        pl: "15px",
        pr: "20px",
      }}
      onClick={() => {
        lineFoodsPost(FoodModalState, setFoodModalState, selectedFoodCount);
      }}
    >
      {children}
    </Button>
  );
});
