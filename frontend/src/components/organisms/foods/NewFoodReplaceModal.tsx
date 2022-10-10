// ライブラリ import
import { memo, VFC, useContext } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

// コンポーネント import
import { FoodLineReplaceButton } from "../../atoms/buttons/foods/FoodLineReplaceButton";
import { FoodReplaceModalCancelButton } from "../../atoms/buttons/foods/FoodReplaceModalCancelButton";

// createContext import
import { FoodModalContext } from "../../pages/Foods";

export const NewFoodReplaceModal: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  const { isFoodReplaceModalOpen, existingRestaurant, newRestaurant } =
    FoodModalState;

  return (
    <Dialog
      open={isFoodReplaceModalOpen}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "10px",
          backgroundColor: "error.main",
        }}
      >
        <WarningAmberIcon
          color="primary"
          sx={{ display: "block", fontSize: { xs: "30px", sm: "45px" } }}
        />
        <DialogTitle
          sx={{
            color: "primary.main",
            fontSize: { xs: "15px", sm: "22px" },
            fontWeight: "bold",
            p: { xs: "15px", sm: "20px" },
          }}
        >
          新規注文を開始しますか？
        </DialogTitle>
      </Box>
      <DialogContent
        sx={{
          fontSize: { xs: "16px", sm: "18px" },
          p: "40px",
        }}
      >
        <Box>{`・既にカートの中に${existingRestaurant}の商品が含まれています。`}</Box>
        <Box
          sx={{ mt: "10px" }}
        >{`・${newRestaurant}の商品に置き換わります。`}</Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: { xs: "none", sm: "center" },
          textAlign: { xs: "center" },
          p: "20px",
        }}
      >
        <FoodReplaceModalCancelButton />
        <FoodLineReplaceButton />
      </DialogActions>
    </Dialog>
  );
});
