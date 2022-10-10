// ライブラリimport
import { VFC, memo, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Box,
  Skeleton,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// コンポーネントimport
import { Header } from "../templates/Header";
import { Footer } from "../templates/Footer";
import { RestaurantsCard } from "../organisms/restaurants/RestaurantsCard";

// 型import
import { Restaurant } from "../../types/api/Restaurant";

// カスタムフックimport
// restaurantsのapi
import { useAuthRestaurants } from "../../hooks/api/useAuthRestaurants";

// 画像import
import MainCoverRestaurantImage from "../../images/restaurants/brooke-lark-M4E7X3z80PQ-unsplash.jpg";

// 定数 import
import { REQUEST_STATE } from "../../constants/constants";

export const Restaurants: VFC = memo(() => {
  const { fetchRestaurants, restaurantsData } = useAuthRestaurants();
  const { fetchStatus, restaurantsList } = restaurantsData;

  // restaurants情報をapiから取得
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: "basis.light",
          // height: "100vh",
        }}
      >
        <Box
          component="img"
          src={MainCoverRestaurantImage}
          alt="main cover"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            width: "100%",
            aspectRatio: "3/2",
          }}
        />
        <Box
          component="article"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pl: "10px",
            pr: "10px",
          }}
        >
          <Box
            component="nav"
            sx={{
              width: "25%",
              backgroundColor: "primary.main",
              borderRadius: "16px",
              display: { xs: "none", sm: "block" },
            }}
          >
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                {[...Array.from(Array(12).keys())].map(
                  (e: number, i: number) => (
                    <ListItemButton key={i}>
                      <ListItemText primary={`カテゴリー${e}`}></ListItemText>
                    </ListItemButton>
                  )
                )}
              </ListItem>
            </List>
          </Box>
          {fetchStatus === REQUEST_STATE.loading ? (
            <Box sx={{ width: "70%" }}>
              <Grid container spacing={2} justifyContent="left">
                {[...Array.from(Array(3).keys())].map((index: number) => (
                  <Grid item xs={12} sm={12} md={6} key={index}>
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width="100%"
                      height="10vh"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <Box
              sx={{
                width: "70%",
              }}
            >
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ justifyContent: "left" }}
              >
                {restaurantsList.map(
                  (restaurant: Restaurant, index: number) => (
                    <Grid item xs={12} sm={12} md={6} key={index}>
                      <RestaurantLink
                        to={`/restaurants/${restaurant.id}/foods`}
                        key={index}
                      >
                        <RestaurantsCard restaurant={restaurant} />
                      </RestaurantLink>
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
});

const RestaurantLink = styled(Link)`
  display: block;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
