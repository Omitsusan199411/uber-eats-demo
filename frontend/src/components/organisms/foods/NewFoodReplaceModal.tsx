// import ライブラリ
import { memo, VFC, useContext } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { FoodModalContext } from "../../pages/Foods";

export const NewFoodReplaceModal: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  return (
    <Dialog
      open={FoodModalState.isFoodReplaceModalOpen}
      onClose={() => {
        setFoodModalState({
          ...FoodModalState,
          isFoodReplaceModalOpen: false,
        });
      }}
    >
      <DialogContent>{FoodModalState.newRestaurant}</DialogContent>
    </Dialog>
  );
});
