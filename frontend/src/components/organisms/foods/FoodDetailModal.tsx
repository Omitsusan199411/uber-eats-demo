// ライブラリ import
import { memo, VFC } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

// 型 import
import { FoodModal } from "../../../types/layout/FoodModal";

// 画像 import
import foodModalImage from "../../../images/foods/food-modal.png";

// 型定義
type FoodDetailModalType = {
  selectedFoodModal: FoodModal;
  onClose: () => void;
};

export const FoodDetailModal: VFC<FoodDetailModalType> = memo((props) => {
  console.log(props);
  console.log(Object.prototype.toString.call(props));
  const { selectedFoodModal, onClose } = props;

  return (
    <Dialog open={selectedFoodModal.isOpen} onClose={onClose}>
      <Box
        component="img"
        src={`${foodModalImage}`}
        alt="Food ModalImage"
      ></Box>
      <DialogTitle>{selectedFoodModal.selectedFood?.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {selectedFoodModal.selectedFood?.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: "black" }}>
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
});
