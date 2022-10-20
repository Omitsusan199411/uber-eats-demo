// import ライブラリ
import { VFC, memo } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

// import コンポーネント
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { SideMenu } from "../organisms/SideMenu";
import { RestaurantsList } from "../organisms/restaurants/RestaurantsList";

// import 型
import { RestaurantsListProps } from "../../types/api/Restaurant";

export const RestaurantsLayout: VFC<RestaurantsListProps> = memo((props) => {
  const { restaurantsList } = props;
  return (
    <>
      <Header />
      <Main
        component="main"
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: { md: "center" },
          backgroundColor: "basis.light",
          minHeight: "100vh",
          pt: "30px",
          pl: { xs: "0px", sm: "0px", md: "10px" },
          pr: { xs: "0px", sm: "0px", md: "10px" },
        }}
      >
        <SideMenu />
        <RestaurantsList restaurantsList={restaurantsList} />
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
