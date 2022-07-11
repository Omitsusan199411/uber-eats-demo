// ライブラリimport
import { VFC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Skeleton } from "@mui/material";

// コンポーネントimport
import { useAuthFoods } from "../../hooks/api/useAuthFoods";

// 型import
import { Food } from "../../types/api/Foods";

// 定数import
import { REQUEST_STATE } from "../../constants/constants";

// 画像import
import FoodImage from "../../images/food-image.jpg";

export const Foods: VFC = memo(() => {
  const { fetchFoods, foodsData } = useAuthFoods();
  // react hoolk社必ず関数コンポーネント本体のトップレベルで呼び出すこと
  const { restaurant_id } = useParams<{ restaurant_id: string }>();

  useEffect(() => {
    fetchFoods(restaurant_id);
  }, []);
  console.log(foodsData);
  return (
    <>
      <FoodsContentList>
        {foodsData.fetchStatus === REQUEST_STATE.loading ? (
          <>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={450}
              height={300}
            ></Skeleton>
          </>
        ) : (
          foodsData.foodsList.map((food: Food, index: number) => (
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
