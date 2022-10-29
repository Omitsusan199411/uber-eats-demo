// ライブラリ import
import { memo, VFC, useContext } from "react";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント import
import { useAuthLineFoodsPut } from "../../../../hooks/api/useAuthLineFoodsPut";
import { BasicButton } from "../BasicButton";

// createContextの定義
import { FoodModalContext } from "../../../pages/FoodsAsOneRestaurant";

export const FoodLineReplaceButton: VFC = memo(() => {
  const { FoodModalState } = useContext(FoodModalContext);
  const { lineFoodsPut } = useAuthLineFoodsPut();
  return (
    <BasicButton
      color="basis"
      variant="contained"
      startIcon={<SendIcon sx={{ mr: "4px" }} />}
      sx={{
        width: "90%",
        // 親コンポーネントのDialogActionsコンポーネントにデフォルトで２番目の子要素から「margin-left: 8px」が付与されるため、それを打ち消すスタイルを定義
        ml: "-8px",
        m: "15px",
        mb: "5px",
        p: "8px",
        pl: "5px",
        pr: "20px",
        color: "primary.main",
      }}
      onClick={() => {
        lineFoodsPut(FoodModalState);
      }}
    >
      新規注文
    </BasicButton>
  );
});
