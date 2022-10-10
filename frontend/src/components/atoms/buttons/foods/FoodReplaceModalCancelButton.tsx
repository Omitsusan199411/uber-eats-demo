// ライブラリ import
import { VFC, memo, useContext } from "react";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント imort
import { BasicButton } from "../BasicButton";

// createContext import
import { FoodModalContext } from "../../../pages/Foods";

export const FoodReplaceModalCancelButton: VFC = memo(() => {
  const { setFoodModalState } = useContext(FoodModalContext);
  return (
    <BasicButton
      color="primary"
      variant="contained"
      startIcon={<SendIcon />}
      sx={{
        width: "60%",
        m: "15px",
        ml: { xs: "8px" },
        p: "8px",
        pl: "15px",
        pr: "20px",
        color: "basis.main",
        border: "2px solid",
        borderColor: "basis.main",
      }}
      onClick={() => {
        setFoodModalState({
          isFoodModalOpen: false,
          isFoodReplaceModalOpen: false,
          selectedFood: {},
          selectedFoodCount: 1,
          existingRestaurant: "",
          newRestaurant: "",
        });
      }}
    >
      キャンセル
    </BasicButton>
  );
});
