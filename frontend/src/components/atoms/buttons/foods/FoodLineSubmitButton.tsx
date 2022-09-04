// ライブラリ import
import { memo, VFC, useContext, ReactNode } from "react";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント import
import { useAuthLineFoodsPost } from "../../../../hooks/api/useAuthLineFoodsPost";
import { useAuthLineFoodsPut } from "../../../../hooks/api/useAuthLineFoodsPut";
import { CustomBasicButton } from "../BasicButton";

// createContextの定義
import { FoodModalContext } from "../../../pages/Foods";

type FoodLineSubmitButtonChildrenProps = {
  children: ReactNode | string;
};

export const FoodLineSubmitButton: VFC<FoodLineSubmitButtonChildrenProps> =
  memo((props) => {
    const { children } = props;
    const { FoodModalState, setFoodModalState } = useContext(FoodModalContext);
    // 仮注文(LineFoods) カスタムフック
    const { lineFoodsPost } = useAuthLineFoodsPost();
    const { lineFoodsPut } = useAuthLineFoodsPut();

    return (
      <>
        {FoodModalState.isFoodModalOpen && (
          <CustomBasicButton
            color="basis"
            variant="contained"
            startIcon={<SendIcon sx={{ mr: { xs: "10px", sm: "-10px" } }} />}
            sx={{
              width: { xs: "50%", md: "60%" },
              alignItems: "center",
              justifyContent: { xs: "row", sm: "space-around" },
              p: "8px",
              pl: "15px",
              pr: "20px",
              color: "primary.main",
            }}
            onClick={() => {
              lineFoodsPost(FoodModalState, setFoodModalState);
            }}
          >
            {children}
          </CustomBasicButton>
        )}
        {FoodModalState.isFoodReplaceModalOpen && (
          <CustomBasicButton
            color="basis"
            variant="contained"
            startIcon={<SendIcon />}
            sx={{
              width: "50%",
              p: "8px",
              pl: "15px",
              pr: "20px",
              color: "primary.main",
            }}
            onClick={() => {
              lineFoodsPut(FoodModalState);
            }}
          >
            {children}
          </CustomBasicButton>
        )}
      </>
    );
  });
