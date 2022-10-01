// ライブラリ import
import { memo, VFC, useContext } from "react";
import IconButton from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";

// createContext import
import { FoodModalContext } from "../../../pages/Foods";

export const FoodDetailModalCloseButton: VFC = memo(() => {
  const { setFoodModalState } = useContext(FoodModalContext);
  return (
    <IconButton
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
      sx={{
        width: "10%",
        position: "absolute",
        right: "0px",
        color: "basis.sub",
      }}
    >
      <CancelIcon fontSize="large" />
    </IconButton>
  );
});
