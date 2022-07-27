// ライブラリ import
import { memo, VFC, useState } from "react";
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

// 型 import
import { FoodModal } from "../../../types/layout/FoodModal";

// 画像 import
import foodModalImage from "../../../images/foods/food-image.jpg";

// 型定義
type FoodDetailModalType = {
  selectedFoodModal: FoodModal;
  onClose: () => void;
};

export const FoodDetailModal: VFC<FoodDetailModalType> = memo((props) => {
  const { selectedFoodModal, onClose } = props;

  // フード数量の状態を持つ
  const [selectedFoodCount, setSelectedFoodCount] = useState<number>(
    selectedFoodModal.initialFoodCount
  );

  // 注文数量の変更
  const CountUp = (): void => {
    setSelectedFoodCount(selectedFoodCount + 1);
  };
  const CountDown = (): void => {
    setSelectedFoodCount(selectedFoodCount - 1);
  };

  // 合計値
  const FoodPrice: number | undefined = selectedFoodModal.selectedFood?.price;

  return (
    <Dialog open={selectedFoodModal.isOpen} onClose={onClose}>
      <CloseButton onClick={onClose} />
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
      <DialogActions sx={{ justifyContent: "space-between", pt: "25px" }}>
        <CountForm
          CountUp={CountUp}
          CountDown={CountDown}
          FoodCount={selectedFoodCount}
        />
        <SubmitButton>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
          >{`${selectedFoodCount}点を注文に追加`}</Box>
          <Box>{`￥${FoodPrice * selectedFoodCount}`}</Box>
        </SubmitButton>
      </DialogActions>
    </Dialog>
  );
});
