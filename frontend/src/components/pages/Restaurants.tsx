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
          minHeight: "100vh",
        }}
      >
        <Box
          component="article"
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            pl: { xs: "10px", sm: "15px", md: "120px" },
            pr: { xs: "10px", sm: "15px", md: "50px" },
          }}
        >
          <Box
            component="nav"
            sx={{
              width: "30%",
              p: "10px",
              backgroundColor: "primary.main",
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
          <Box
            sx={{
              width: { xs: "80%", sm: "65%", md: "100%" },
              backgroundColor: "basis.light",
              pl: { xs: "0px", sm: "20px", md: "50px" },
              pr: { xs: "0px", sm: "20px", md: "0px" },
            }}
          >
            {fetchStatus === REQUEST_STATE.loading ? (
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
            ) : (
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
            )}
          </Box>
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
