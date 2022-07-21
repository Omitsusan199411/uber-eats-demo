// ライブラリimport
import { VFC, memo, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";

// コンポーネントimport
import { MainText } from "../atoms/MainText";
import { SubText } from "../atoms/SubText";
import { Header } from "../templates/Header";

// 型import
import { Restaurant } from "../../types/api/Restaurant";

// カスタムフックimport
// restaurantsのapi
import { useAuthRestaurants } from "../../hooks/api/useAuthRestaurants";

// 画像import
import MainCoverRestaurantImage from "../../images/restaurants/brooke-lark-M4E7X3z80PQ-unsplash.jpg";
import RestaurantImage from "../../images/restaurants/restaurant-image.jpg";

// 定数 import
import { REQUEST_STATE } from "../../constants/constants";

export const Restaurants: VFC = memo(() => {
  const { fetchRestaurants, restaurantsData } = useAuthRestaurants();

  // restaurants情報をapiから取得
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      <Header />
      <Box
        component="img"
        src={MainCoverRestaurantImage}
        alt="main cover"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          width: "100vw",
          aspectRatio: "3/2",
          pt: "60px",
        }}
      />
      <RestaurantsContentList>
        {restaurantsData.fetchStatus === REQUEST_STATE.loading ? (
          <>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            />
          </>
        ) : (
          restaurantsData.restaurantsList.map(
            (restaurant: Restaurant, index: number) => (
              <Link
                to={`/restaurants/${restaurant.id}/foods`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <RestaurantsContentWrapper>
                  <RestaurantsImageNode src={RestaurantImage} />
                  <MainText>{restaurant.name}</MainText>
                  <SubText>{`配送料:${restaurant.fee}円 ${restaurant.time_required}分`}</SubText>
                </RestaurantsContentWrapper>
              </Link>
            )
          )
        )}
      </RestaurantsContentList>
    </>
  );
});

const RestaurantsContentList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RestaurantsContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 48px;
`;

const RestaurantsImageNode = styled.img`
  width: 100%;
`;
