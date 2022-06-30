// ライブラリ
import { VFC, memo, useEffect } from "react";
import styled from "styled-components";

// カスタムフック
// restaurantsのapi
import { useAuthRestaurants } from "../../hooks/api/useAuthRestaurants";

// images
import MainLogo from "../../images/logo.png";
import MainCoverImage from "../../images/main-cover-image.png";

export const Restaurants: VFC = memo(() => {
  const { fetchRestaurants } = useAuthRestaurants();

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
