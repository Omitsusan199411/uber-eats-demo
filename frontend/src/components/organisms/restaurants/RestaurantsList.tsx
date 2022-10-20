// import ライブラリ
import { VFC, memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";

// import コンポーネント
import { RestaurantsCard } from "../../molecules/restaurants/RestaurantsCard";

// 型import
import {
  Restaurant,
  RestaurantsListProps,
} from "../../../types/api/Restaurant";

export const RestaurantsList: VFC<RestaurantsListProps> = memo((props) => {
  const { restaurantsList } = props;
  return (
    <Box component="article">
      <Box
        component="section"
        sx={{
          maxWidth: "1200px",
          backgroundColor: "basis.light",
          pb: { xs: "150px", sm: "300px" },
          pl: { xs: "0px", sm: "0px", md: "50px" },
          pr: { xs: "0px", sm: "0px", md: "15px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            mb: "30px",
            p: "30px",
            color: "basis.main",
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "primary.main",
            borderRadius: "4px",
          }}
        >
          店舗一覧
        </Box>
        <Grid
          container
          spacing={{ xs: 0, sm: 1, md: 2 }}
          component="ul"
          sx={{ width: "100%", p: "0px" }}
        >
          {/* 取得したrestaurantsListの配列をmapメソッドで処理し、JSX構文を含む新たな配列の形で返し、一覧を表示する */}
          {/* 「() => ()」の書き方でreturn文を省略している */}
          {/* react-domでは、「<タグ>{配列}<タグ>」と記述することで要素を展開し、一覧を表示できる */}
          {restaurantsList.map((restaurant: Restaurant, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              key={index}
              component="li"
              sx={{ listStyle: "none" }}
            >
              <RestaurantLink to={`/restaurants/${restaurant.id}/foods`}>
                <RestaurantsCard restaurant={restaurant} />
              </RestaurantLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
});

const RestaurantLink = styled(Link)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
