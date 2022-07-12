// ライブラリimport
import { VFC, memo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { Skeleton } from "@mui/material";

// コンポーネントimport
import { useAuthFoods } from "../../hooks/api/useAuthFoods";
import { LocalMalllcon, QueryBuilderIcon } from "../atoms/MaterialIcons";

// 型import
import { Food } from "../../types/api/Foods";

// 定数import
import { REQUEST_STATE } from "../../constants/constants";
import { COLORS } from "../../constants/style_constants";

// 画像import
import FoodImage from "../../images/food-image.jpg";
import MainLogo from "../../images/logo.png";

export const Foods: VFC = memo(() => {
  const { fetchFoods, foodsState } = useAuthFoods();
  // react hoolk社必ず関数コンポーネント本体のトップレベルで呼び出すこと
  const { restaurant_id } = useParams<{ restaurant_id: string }>();

  useEffect(() => {
    fetchFoods(restaurant_id);
  }, []);

  return (
    <>
      <FoodsHeaderWrapper>
        <Link to={`/restaurants`}>
          <MainLogoImage src={MainLogo} alt={"main logo"} />
        </Link>
        <BagIconWrapper>
          <Link to={`/orders`}>
            <ColoredBagIcon fontSize="large" />
          </Link>
        </BagIconWrapper>
      </FoodsHeaderWrapper>
      <FoodsContentList>
        {foodsState.fetchStatus === REQUEST_STATE.loading ? (
          <p style={{ fontSize: "28px" }}>ロード中...</p>
        ) : (
          foodsState.foodsList.map((food: Food, index: number) => (
            <FoodsContentWrapper key={index}>
              <FoodsImageNode src={FoodImage}></FoodsImageNode>
              <MainText>{food.name}</MainText>
              <SubText>{food.price}</SubText>
              <SubText>{food.description}</SubText>
            </FoodsContentWrapper>
          ))
        )}
      </FoodsContentList>
    </>
  );
});

const FoodsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`;

const BagIconWrapper = styled.div`
  padding-top: 24px;
`;

const ColoredBagIcon = styled(LocalMalllcon)`
  color: ${COLORS.MAIN};
`;

const FoodsContentList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`;

const FoodsContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 48px;
`;

const FoodsImageNode = styled.img`
  width: 100%;
`;

const MainText = styled.div`
  color: black;
  font-size: 18px;
`;

const SubText = styled.div`
  color: black;
  font-size: 18px;
`;
