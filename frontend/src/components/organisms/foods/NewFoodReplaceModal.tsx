// ライブラリ import
import { memo, VFC, useContext } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// コンポーネント import
import { FoodLineSubmitButton } from "../../atoms/buttons/FoodLineSubmitButton";
import { CloseButton } from "../../atoms/buttons/CloseButton";

// createContext import
import { FoodModalContext } from "../../pages/Foods";

export const NewFoodReplaceModal: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  console.log(FoodModalState);

  return (
    <Dialog
      open={FoodModalState.isFoodReplaceModalOpen}
      onClose={() => {
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
      <CloseButton />
      <DialogTitle>新規注文を開始しますか？</DialogTitle>
      <DialogContent>
        <p>
          {`ご注文に${FoodModalState.existingRestaurant}の商品が含まれています。
          新規の注文を開始して${FoodModalState.newRestaurant}の商品を追加してください。`}
        </p>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <FoodLineSubmitButton>新規購入</FoodLineSubmitButton>
      </DialogActions>
    </Dialog>
  );
});
