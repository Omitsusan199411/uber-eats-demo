// import ライブラリ
import { VFC, memo } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

// import コンポーネント
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { SideMenu } from "../organisms/SideMenu";
import { FoodsList } from "../organisms/foods/FoodsList";

// import 型
import { FoodListProps } from "../../types/api/Food";

export const FoodsAsOneRestaurantLayout: VFC<FoodListProps> = memo((props) => {
  const { foodsList, setFoodModalState } = props;
  return (
    <>
      <Header />
      <Main
        component="main"
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: { md: "center" },
          backgroundColor: "basis.light",
          pt: "30px",
          pl: { xs: "0px", sm: "0px", md: "10px" },
          pr: { xs: "0px", sm: "0px", md: "10px" },
        }}
      >
        <SideMenu />
        <FoodsList
          foodsList={foodsList}
          setFoodModalState={setFoodModalState}
        />
      </Main>
      <Footer />
    </>
  );
});

const Main = styled(Box)`
  minheight: 100vh;
  m: 0 auto;
  pt: 30px;
`;
