// ライブラリ import
import { memo, VFC, useContext, ReactNode } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

// コンポーネント import
import { useAuthLineFoodsPost } from "../../../hooks/api/useAuthLineFoodsPost";
import { useAuthLineFoodsPut } from "../../../hooks/api/useAuthLineFoodsPut";

// createContextの定義
import { FoodModalContext } from "../../pages/Foods";

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
          <CustomButton
            color="info"
            variant="contained"
            startIcon={<SendIcon />}
            sx={{
              width: { xs: "50%", md: "60%" },
              alignItems: "center",
              justifyContent: "space-around",
              p: "8px",
              pl: "15px",
              pr: "20px",
            }}
            onClick={() => {
              lineFoodsPost(FoodModalState, setFoodModalState);
            }}
          >
            {children}
          </CustomButton>
        )}
        {FoodModalState.isFoodReplaceModalOpen && (
          <CustomButton
            color="info"
            variant="contained"
            startIcon={<SendIcon />}
            sx={{
              width: "50%",
              p: "8px",
              pl: "15px",
              pr: "20px",
            }}
            onClick={() => {
              lineFoodsPut(FoodModalState);
            }}
          >
            {children}
          </CustomButton>
        )}
      </>
    );
  });

export const CustomButton = styled(Button)`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
