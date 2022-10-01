// ライブラリ import
import { memo, VFC, useContext } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

// コンポーネント import
import { FoodDetailModalCloseButton } from "../../atoms/buttons/foods/FoodDetailModalCloseButton";
import { FoodLineRegistButton } from "../../atoms/buttons/foods/FoodLineRegistButton";
import { CountForm } from "../../moleciles/form/CountForm";

// 画像 import
import foodModalImage from "../../../images/foods/food-image.jpg";

// createContext import
import { FoodModalContext } from "../../pages/Foods";

export const FoodDetailModal: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  const { isFoodModalOpen, selectedFood } = FoodModalState;
  return (
    <Dialog
      open={isFoodModalOpen}
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
      <FoodDetailModalCloseButton />
      <Box
        component="img"
        src={`${foodModalImage}`}
        alt="Food ModalImage"
      ></Box>
      <DialogTitle>{selectedFood?.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>{selectedFood?.description}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between", pt: "25px" }}>
        <CountForm />
        <FoodLineRegistButton />
      </DialogActions>
    </Dialog>
  );
});
