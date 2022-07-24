// ライブラリimport
import { memo } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// 型import
import { Food } from "../../../types/api/Foods";

// 画像import
import foodImage from "../../../images/foods/food-image.jpg";

type FoodsMap = {
  foodInfo: Food;
};

export const FoodsCard = memo((props: FoodsMap) => {
  const { foodInfo } = props;

  const onClickFood = () => {
    console.log(foodInfo.name);
  };

  return (
    <CardStyle
      sx={{ width: "100%", borderRadius: "6px", display: "flex" }}
      onClick={() => {
        onClickFood();
      }}
    >
      <CardMedia
        component="img"
        image={foodImage}
        alt="foodImage"
        sx={{ width: { xs: "40%", sm: "35%" } }}
      />
      <CardContent sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: "16px" }}>{foodInfo.name}</Typography>
        <Typography sx={{ fontSize: "14px" }}>￥{foodInfo.price}</Typography>
      </CardContent>
    </CardStyle>
  );
});

const CardStyle = styled(Card)`
  &:hover {
    cursor: pointer;
  }
`;
