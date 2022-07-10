// ライブラリimport
import { VFC, memo, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

// 型import
import { Restaurant } from "../../types/api/Restaurant";

// カスタムフックimport
// restaurantsのapi
import { useAuthRestaurants } from "../../hooks/api/useAuthRestaurants";

// 画像import
import MainLogo from "../../images/logo.png";
import MainCoverImage from "../../images/main-cover-image.png";
import RestaurantImage from "../../images/restaurant-image.png";

// 定数 import
import { REQUEST_STATE } from "../../constants/constants";

// 型定義
export type RestaurantsStateType = {
  fetchState: string;
  restaurantsList: Restaurant[];
};

export const Restaurants: VFC = memo(() => {
  const { fetchRestaurants, restaurantsData } = useAuthRestaurants();

  // restaurants情報をapiから取得
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      <HeaderWapper>
        <MainLogoImage src={MainLogo} alt="main logo"></MainLogoImage>
      </HeaderWapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover"></MainCover>
      </MainCoverImageWrapper>
      <RestaurantsContentList>
        {restaurantsData.fetchState === REQUEST_STATE.loading ? (
          <>
            <Skeleton variant="rectangular" width={450} height={300} />
            <Skeleton variant="rectangular" width={450} height={300} />
            <Skeleton variant="rectangular" width={450} height={300} />
          </>
        ) : (
          restaurantsData.restaurantsList.map((restaurant, index) => (
            <Link
              to={`/restaurants/${restaurant.id}/foods`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <RestaurantsContentWrapper>
                <RestaurantsImageNode src={RestaurantImage} />
                <MainText>{restaurant.name}</MainText>
                <SubText>{`配送料:${restaurant.fee}円 ${restaurant.time_required}分}`}</SubText>
              </RestaurantsContentWrapper>
            </Link>
          ))
        )}
      </RestaurantsContentList>
    </>
  );
});

const HeaderWapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`;

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;

const RestaurantsContentList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`;

const RestaurantsContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 48px;
`;

const RestaurantsImageNode = styled.img`
  width: 100%;
`;

const MainText = styled.p`
  color: black;
  font-size: 18px;
`;

const SubText = styled.p`
  color: black;
  font-size: 12px;
`;
