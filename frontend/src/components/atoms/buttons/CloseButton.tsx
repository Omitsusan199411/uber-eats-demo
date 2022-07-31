// ライブラリ import
import { memo, VFC, useContext } from "react";
import IconButton from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";

// createContext import
import { FoodModalContext } from "../../pages/Foods";

export const CloseButton: VFC = memo(() => {
  const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
  return (
    <IconButton
      onClick={() => {
        setFoodModalState({
          ...FoodModalState,
          isOpen: false,
        });
      }}
      sx={{
        width: "10%",
        position: "absolute",
        right: "0px",
        color: "#aaaaaa",
      }}
    >
      <CancelIcon fontSize="large" />
    </IconButton>
  );
});
