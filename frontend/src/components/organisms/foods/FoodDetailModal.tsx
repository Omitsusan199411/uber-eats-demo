// ライブラリ import
import { memo, VFC, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

// コンポーネント import
import { CloseButton } from "../../atoms/buttons/CloseButton";
import { SubmitButton } from "../../atoms/buttons/SubmitButton";
import { CountForm } from "../../moleciles/form/CountForm";

// 画像 import
import foodModalImage from "../../../images/foods/food-image.jpg";

// createContext import
import { FoodModalContext } from "../../pages/Foods";

export const FoodDetailModal: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);

  // フード数量の更新状態を持つ
  const [selectedFoodCount, setSelectedFoodCount] = useState<number>(
    FoodModalState.initialFoodCount
  );

  return (
    <Dialog
      open={FoodModalState.isFoodModalOpen}
      onClose={() => {
        setFoodModalState({
          ...FoodModalState,
          isFoodModalOpen: false,
        });
      }}
    >
      <CloseButton />
      <Box
        component="img"
        src={`${foodModalImage}`}
        alt="Food ModalImage"
      ></Box>
      <DialogTitle>{FoodModalState.selectedFood?.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {FoodModalState.selectedFood?.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between", pt: "25px" }}>
        <CountForm
          selectedFoodCount={selectedFoodCount}
          setSelectedFoodCount={setSelectedFoodCount}
        />
        <SubmitButton selectedFoodCount={selectedFoodCount}>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
          >{`${selectedFoodCount}点を注文に追加`}</Box>
          <Box>{`￥${(
            FoodModalState.selectedFood?.price * selectedFoodCount
          ).toLocaleString()}`}</Box>
        </SubmitButton>
      </DialogActions>
    </Dialog>
  );
});
