// ライブラリ import
import { memo, VFC } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント import
import { useAuthLineFoodsPost } from "../../../hooks/api/useAuthLineFoodsPost";

// 型 import
import { FoodLineSubmitProps } from "../../../types/button/FoodLineSubmitProps";

export const SubmitButton: VFC<FoodLineSubmitProps> = memo((props) => {
  const { children, selectedFoodInfo, selectedFoodCount } = props;

  // 仮注文(line_foods登録) カスタムフック
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
        lineFoodsPost(selectedFoodInfo, selectedFoodCount);
      }}
    >
      {children}
    </Button>
  );
});
