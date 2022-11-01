// import ライブラリ
import { VFC, memo } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

// import コンポーネント
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { FoodsList } from "../organisms/foods/FoodsList";
import { DrawerSideMenu } from "../organisms/DrawerSideMenu";

// import 型
import { FoodListProps } from "../../types/api/Food";
import { DrawerProps } from "../../types/drawer/DrawerProps";

export const FoodsAsOneRestaurantLayout: VFC<FoodListProps & DrawerProps> =
  memo((props) => {
    const { foodsList, setFoodModalState, drawerOpen, setDrawerOpen } = props;
    return (
      <>
        <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <DrawerSideMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <Box
          component="main"
          sx={{
            minHeight: "100vh",
            display: "block",
            backgroundColor: "basis.light",
          }}
        >
          <FoodsList
            foodsList={foodsList}
            setFoodModalState={setFoodModalState}
          />
        </Box>
        <Footer />
      </>
    );
  });
