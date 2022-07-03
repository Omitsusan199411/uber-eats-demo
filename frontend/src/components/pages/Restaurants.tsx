// ライブラリimport
import { VFC, memo, useEffect, useReducer } from "react";
import styled from "styled-components";

// コンポーネントimport
import {
  apiActionConditions,
  restaurantsReducer,
} from "../../reducers/restaurants";

// 型import
import { Restaurant } from "../../types/api/Restaurant";

// カスタムフックimport
// restaurantsのapi
import { useAuthRestaurants } from "../../hooks/api/useAuthRestaurants";

// 画像import
import MainLogo from "../../images/logo.png";
import MainCoverImage from "../../images/main-cover-image.png";

// 定数import
import { REQUEST_STATE } from "../../constants/constants";

// 型定義
export type RestaurantsStateType = {
  fetchState: string;
  restaurantsList: Restaurant[];
};

export const Restaurants: VFC = memo(() => {
  const { fetchRestaurants } = useAuthRestaurants();
  const initialState: RestaurantsStateType = {
    fetchState: REQUEST_STATE.initial,
    restaurantsList: [],
  };
  const [state, dispatch] = useReducer(restaurantsReducer, initialState);

  useEffect(() => {
    dispatch({
      type: apiActionConditions.fetching,
      payload: { restaurants: [] },
    });
    const restaurantsApi = new Promise(fetchRestaurants);
    restaurantsApi.then((restaurantsData: Restaurant[]) => {
      dispatch({
        type: apiActionConditions.fetch_success,
        payload: { restaurants: restaurantsData },
      });
    });
  }, []);
  return (
    <>
      <HeaderWapper>
        <MainLogoImage src={MainLogo} alt="main logo"></MainLogoImage>
      </HeaderWapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover"></MainCover>
      </MainCoverImageWrapper>
      {state.restaurantsList.map((restaurant: Restaurant) => (
        <div key={restaurant.id}>{restaurant.name}</div>
      ))}
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
