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
import { NewFoodReplaceModal } from "./NewFoodReplaceModal";

// 型 import
import { FoodModal } from "../../../types/layout/FoodModal";
import { NewFoodReplace } from "../../../types/api/Food";

// 画像 import
import foodModalImage from "../../../images/foods/food-image.jpg";

// 型定義
type FoodDetailModalType = {
  selectedFoodInfo: FoodModal;
  onClose: () => void;
};

export const FoodDetailModal: VFC<FoodDetailModalType> = memo((props) => {
  const { selectedFoodInfo, onClose } = props;

  // フード数量の状態を持つ
  const [selectedFoodCount, setSelectedFoodCount] = useState<number>(
    selectedFoodInfo.initialFoodCount
  );

  // 注文の置き換えを判断する状態【NewFoodReplaceModalを表示させるかどうか】（初期値）
  const initialNewFoodReplaceState: NewFoodReplace = {
    isOpen: false,
    newReplaceSelectedFood: {},
  };

  // 注文の置き換えを判断する状態【NewFoodReplaceModalを表示させるかどうか】
  const [NewFoodReplaceState, setNewFoodReplaceState] = useState(
    initialNewFoodReplaceState
  );

  return (
    <>
      {NewFoodReplaceState.isOpen === true ? (
        <NewFoodReplaceModal
          NewFoodReplaceState={NewFoodReplaceState}
          onClose={() => {
            setNewFoodReplaceState({
              ...NewFoodReplaceState,
              isOpen: false,
            });
          }}
        />
      ) : (
        <Dialog open={selectedFoodInfo.isOpen} onClose={onClose}>
          <CloseButton onClick={onClose} />
          <Box
            component="img"
            src={`${foodModalImage}`}
            alt="Food ModalImage"
          ></Box>
          <DialogTitle>{selectedFoodInfo.selectedFood?.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {selectedFoodInfo.selectedFood?.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "space-between", pt: "25px" }}>
            <CountForm
              selectedFoodCount={selectedFoodCount}
              setSelectedFoodCount={setSelectedFoodCount}
            />
            <SubmitButton
              selectedFoodInfo={selectedFoodInfo.selectedFood}
              selectedFoodCount={selectedFoodCount}
            >
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
              >{`${selectedFoodCount}点を注文に追加`}</Box>
              <Box>{`￥${(
                selectedFoodInfo.selectedFood?.price * selectedFoodCount
              ).toLocaleString()}`}</Box>
            </SubmitButton>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
});
