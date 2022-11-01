// import ライブラリ
import { VFC, memo } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

// import コンポーネント
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { RestaurantsList } from "../organisms/restaurants/RestaurantsList";
import { DrawerSideMenu } from "../organisms/DrawerSideMenu";

// import 型
import { RestaurantsListProps } from "../../types/api/Restaurant";
import { DrawerProps } from "../../types/drawer/DrawerProps";

// 定数 import
import { DRAWER_WIDTH } from "../../constants/constants";

export const RestaurantsLayout: VFC<RestaurantsListProps & DrawerProps> = memo(
  (props) => {
    const { restaurantsList, drawerOpen, setDrawerOpen } = props;
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
          <RestaurantsList restaurantsList={restaurantsList} />
        </Box>
        <Footer />
      </>
    );
  }
);
